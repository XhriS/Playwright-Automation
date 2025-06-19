class ProductIndexPage {
    constructor(page) {
        this.products = page.locator(".card-body");
        this.productText =  page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.page = page;
    }

    async searchProductAddCart(productName)
    {
        const titles = await this.productText.allTextContents();
        console.log(titles);
        
        const count = await this.products.count();
        for(let i=0; i<count; ++i)
        {
            if(await this.products.nth(i).locator("b").textContent() === productName)
            {
                //Add to Cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCart()
    {
        await this.cart.click();
        await this.page.locator("div li").first().waitFor();
    }


}
module.exports = {ProductIndexPage};