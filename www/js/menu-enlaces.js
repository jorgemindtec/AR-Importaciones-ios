function clean(){
	$("#pantalla-sesion").hide();
	
	$("#inicio").hide();
	$("#menu01").removeClass( "m-active" );
	$("#pantalla-ar").hide();
	$("#menu02").removeClass( "m-active" );
	$("#pantalla-buscador").hide();
	$("#menu03").removeClass( "m-active" );
	$("#pantalla-lista-productos").hide();
	$("#menu04").removeClass( "m-active" );
	$("#pantalla-como-importar").hide();
	$("#menu05").removeClass( "m-active" );
	$("#pantalla-contacto").hide();
	$("#menu06").removeClass( "m-active" );
	$("#pantalla-foto").hide();
	$("#menu07").removeClass( "m-active" );
	$("#pantalla-importaciones").hide();
	$("#menu08").removeClass( "m-active" );
    //touchSideSwipe.tssClose();
}

var funcionMenu = 0;
function FMenu() {
	if (funcionMenu == 0){
		$("#menu").addClass("show-menu");
		$("#menu-toggle").addClass("show-menu");
		funcionMenu = 1;
		CerrarMenu = true;		
	}
	else {
		$("#menu").removeClass("show-menu");
		$("#menu-toggle").removeClass("show-menu");
		funcionMenu = 0;			
	}
}

function menu(dato){
	$("#menu").removeClass("show-menu");
	$("#menu-toggle").removeClass("show-menu");
	funcionMenu = 0;
	
	if (dato==0){
		clean();
		$("#pantalla-sesion").show();
	}
	if (dato==1){
		clean();
		$("#menu01").addClass( "m-active" );
		$("#inicio").show();
	}
	if (dato==2){
		clean();
		$("#menu02").addClass( "m-active" );
		$("#pantalla-ar").show();
	}
	if (dato==3){
		clean();
		$("#menu03").addClass( "m-active" );
		$("#pantalla-buscador").show();
	}
	if (dato==4){
		clean();
		$("#menu04").addClass( "m-active" );
		if(TotalProducto == 0){
			$("#lista-vacia").show()
		}
		else{
			$("#lista-vacia").hide()
		}
		$("#pantalla-lista-productos").show();
	}
	if (dato==5){
		clean();
		$("#menu05").addClass( "m-active" );
		$("#pantalla-como-importar").show();
	}
	if (dato==6){
		clean();
		$("#menu06").addClass( "m-active" );
		$("#pantalla-contacto").show();
	}
	if (dato==7){
		clean();
		$("#menu07").addClass( "m-active" );
		$("#pantalla-foto").show();
	}
	if (dato==8){
		clean();
		$("#menu0").addClass( "m-active" );
		$("#pantalla-importaciones").show();
		Reporte();
	}
	
}