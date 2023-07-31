import os
import scrapy
from typing import Any


class UfosSpider(scrapy.Spider):
    name = "ufos"
    allowed_domains = ["nuforc.org"]
    start_urls = [os.environ['UFO_DATA_URL']]

    def parse(self, response) -> Any:
        print("UFOS", response)
