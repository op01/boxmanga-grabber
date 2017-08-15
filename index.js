const Nightmare = require('nightmare')
module.exports = function(url){
  const nightmare = Nightmare({ show: false })
  const startTime=new Date()
  const result = []
  return nightmare
    .goto(url)
    // .wait('span[data-toggle]')
    .click('span[data-toggle]')
    .click('input[value=all]')
    .evaluate(function(){
      setPage()
    })
    // .wait(1000)
    .on('console',function(t,m){
      result.push(m)
    })
    .evaluate(function() {
      let i = 0
      let f = x => {
        x.scrollIntoView()
        console.log(x.src)
        scrollBy(0,x.clientHeight)
        i++
      }
      let s = function() {
        let a = document.querySelectorAll('.display_content img')
        if(i<arr_page.length){
            if(i<a.length){
              f(a[i])
            }
        }
        else {
          $("body").append('<span id="end"></span>')
          clearInterval(it)
        }
      }
      let it=setInterval(s,30)
    })
    .wait('#end')
    .end()
    .then(function(){
      const endTime = new Date()
      const t = endTime-startTime
      return {
        time:t/1000,
        data: result
      }
    })
    .catch(function(error){
      console.error('grab failed:', error)
      return {
          error: err.message
      }
    })
}