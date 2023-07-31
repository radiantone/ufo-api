import scrapy


class UfosSpider(scrapy.Spider):
    name = "ufos"
    allowed_domains = ["nuforc.org"]
    start_urls = ["https://nuforc.org/webreports/ndxloc.html"]

    def parse(self, response):
        print("UFOS", response)
