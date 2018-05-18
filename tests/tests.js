module.exports ={
    beforeEach:browser => {
        browser.url('http://localhost:3000/')
    },// beforeEach
after : browser => {
    browser.end()
},// after 
'Odds and Evens' : browser=>{
// input numbers
browser.setValue('input[name="evenOddInput"]','1,2,3,4')
// click sort button
.click('button.confirmationButton')
//check even output
browser.expect.element('span[name="evenResults"]').text.to.equal("Evens: [2,4]")
//browser.waitForElementPresent('span.resultsbox',5000)
// check odd output
browser.expect.element('span[name="oddResults"]').text.to.equal('Odds: [1,3]')
.pause(3000)
},// Odds and Evens

'Filter Object' : browser => {
//input 
browser.setValue('input[name="objectFilterInput"]','hairColor')
// click sort button
.click('button[name="objectFilterButton"]')
//check output
browser.expect.element('span[name="objectFilterResults"').text.to.contain('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
},// filter object
'Filter Strings' : browser => {
// input
browser.setValue('input[id="nameFilterInput"','J')
// click button
.click('button[id="nameFilterButton"]')
//check output
browser.expect.element('span[name="nameFilterResults"').text.to.contain('Filtered Names: [ "James", "Jessica", "Jennifer" ]')
browser.pause(3000)
},// filter strings
'Palindrome' : browser=>{
// true
browser.setValue('input[name="palindromeInput"','racecar')
.click('button[name="palindromeButton"]')
browser.expect.element('span[name="palindromeResults"').text.to.contain('Palindrome: true')
// false
browser.setValue('input[name="palindromeInput"','abc')
.click('button[name="palindromeButton"]')
browser.expect.element('span[name="palindromeResults"').text.to.contain('Palindrome: false')
browser.pause(3000)
},// Palindrome
'Sum' : browser => {
// input
browser.setValue('input[name=sumInput1','1')
browser.setValue('input[name=sumInput2','2')
browser.pause(3000)
// click button
.click('button[name=sumButton]')
//check output
browser.expect.element('span[name="sumResults"').text.to.contain('Sum: 3')

},// sums
}// exprots