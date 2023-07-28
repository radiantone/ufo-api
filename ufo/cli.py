"""
cli.py - CLI tool for UFO API
"""
import logging
import multiprocessing
import sys

import click

logging.basicConfig(
    level=logging.INFO,
    format="%(filename)s: "
    "%(levelname)s: "
    "%(funcName)s(): "
    "%(lineno)d:\t"
    "%(message)s",
)


logger = logging.getLogger(__name__)


def handle_exception(exc_type, exc_value, exc_traceback):
    logging.error("Uncaught exception %s", exc_value)


@click.group(invoke_without_command=True)
@click.option("--debug", is_flag=True, default=False, help="Debug switch")
@click.pass_context
def cli(context, debug):
    """UFO CLI to interact with API"""

    for handler in logging.root.handlers[:]:
        logging.root.removeHandler(handler)

    if debug:
        logging.basicConfig(
            format="%(asctime)s : %(name)s %(levelname)s : %(message)s",
            level=logging.DEBUG,
        )
    else:
        logging.basicConfig(
            format="%(asctime)s : %(name)s %(levelname)s : %(message)s",
            level=logging.INFO,
        )

    if len(sys.argv) == 1:
        click.echo(context.get_help())


@cli.command()
@click.option("--port", "-p", default=8001, help="Port to host API")
@click.option("--host", "-h", default="0.0.0.0", help="Host IP address")
def start(port, host):
    """Start the UFO API service"""

    def start_api():
        import gunicorn.app.base

        from ufo.api import app as server

        cpus = multiprocessing.cpu_count()

        class StandaloneApplication(gunicorn.app.base.BaseApplication):
            def init(self, parser, opts, args):
                pass

            def __init__(self, app, options=None):
                self.options = options or {}
                self.application = app
                super().__init__()

            def load_config(self):
                config = {
                    key: value
                    for key, value in self.options.items()
                    if key in self.cfg.settings and value is not None
                }
                for key, value in config.items():
                    self.cfg.set(key.lower(), value)

            def load(self):
                return self.application

        logger.info("Initializing server app....")
        logger.info("Serving API on {}:{}".format(host, port))

        try:
            options = {
                "bind": "%s:%s" % (host, str(port)),
                "workers": cpus,
                "timeout": 120,
            }
            StandaloneApplication(server, options).run()

        except Exception as ex:
            logging.error(ex)
            logger.info("Shutting down...")

    start_api()
