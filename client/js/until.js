export default{
 closeNameBox () {
    nameBox.style.display = 'none'
  },
  filterDate ( val ) {
    const date = new Date( val )
    return date.getFullYear() +'年'+ (date.getMonth() + 1) +'月'+ date.getDate()
  },
  sendSMS (stin) {
    const val = stin.value
    if ( val ) {
      client.send( val )
      stin.value = ''
    } else {
      alert('请输入内容')
    }
  }
  
}