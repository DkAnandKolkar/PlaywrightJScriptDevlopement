class LoginPage
{
    constructor (page)
    {
        this.page = page
        this.username = "//input[@name='email1']"
        this.password ="//input[@name='password1']"
        this.loginButton = "//button[@class='submit-btn']" 
        this.menu = "//div[@class='navbar-menu-links']//img[@alt='menu']"
    }
//https://www.youtube.com/watch?v=4aiu6pRE0YQ&t=1357s
    async loginToApplication()
    {

        await this.page.fill(this.username , "kolkardeepak@gmail.com")
        await this.page.fill(this.password , "123456789")
        await this.page.click(this.loginButton)
        
    }

    async menuSelect(menuToSelect)
    {
        await this.page.click(this.menu)
        await this.page.click("//div[contains(text(),'"+menuToSelect+"')]")
        // await this.page.pause()
        
    }
    async logoutApplication()
    {

        await this.page.fill(this.username , "kolkardeepak@gmail.com")
        await this.page.fill(this.password , "123456789")
        await this.page.click(this.loginButton)
        await page.waitForLoadState("load")
    }
}

module.exports=LoginPage;