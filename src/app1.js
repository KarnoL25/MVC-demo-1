import './app1.css'
import $ from 'jquery'

const $num = $('#num')
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#div2')
const n = localStorage.getItem('n')
$num.text(n || 100)

$button1.on('click',()=>{
   let n = parseInt($num.text())
    n += 1
    $num.text(n)
    localStorage.setItem('n',n)
})
$button2.on('click',()=>{
    let n = parseInt($num.text())
     n -= 1
     $num.text(n)
     localStorage.setItem('n',n)
 })
 $button3.on('click',()=>{
    let n = parseInt($num.text())
     n *= 2
     $num.text(n)
     localStorage.setItem('n',n)
 })
 $button4.on('click',()=>{
    let n = parseInt($num.text())
     n /= 2
     $num.text(n)
     localStorage.setItem('n',n)
 })