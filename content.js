// Перенаправление на страницу ios
console.log("prishlo");
if (window.location.href.includes('https://clicker.joincommunity.xyz/clicker') and window.location.href.includes('weba') and window.location.href.includes('web')) {
  window.location.href = window.location.href.replace('weba', 'ios');
  window.location.href = window.location.href.replace('web', 'ios');
}
