$.getJSON( "diapo.json", function( data ) {
  var json = [];
  $.each( data, function( key, val ) {
    json.push(val);
  })
  var i=0;
  var b;
  function debut(){
  	clearInterval(b);
  	b=setInterval(debut,1000)
  	$('#photo').attr('src',json[i]);
  	i++
  	if(i==json.length){
  		i=0
  	}
  }
  debut()
})

