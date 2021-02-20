
var i ;
//function screan(){

    console.log('Success1');
const puppeteer = require('puppeteer');
console.log('Success2');
(async () => {
  //{defaultViewport: {width: 1920, height: 1080} }
    const browser = await puppeteer.launch({defaultViewport: {width: 1420, height: 1080} });
    console.log('Success3');
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('Success4');
    if (await page.goto('https://www.npmjs.com/package/puppeteer')){
        console.log('Success5');
    await page.screenshot({ path: 'photo/example090nn.png', fullPage: true} );
//, fullPage: true}
    console.log('Success6');
    await browser.close();
  }
else{
    console.log("Failure");
}  })();


//} end function
/*
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://webplatform.github.io/docs/tutorials/your_first_look_at_javascript/');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();


}*/

