## A jQuery plugin ##
Just a test jQuery plugin for learn and practice.

## Version ##
0.1.0

## Usage ##
include **jQuery** and **jQuery.StickyAutoHideNav.js** first

	<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
	<script src="StickyAutoHideNav/jQuery.StickyAutoHideNav.js"></script>
then include this code but replace **mynav** width **your nav's ID**

	<script type="text/javascript">
		$(document).ready(function(){
			$.hideOnScroll({
				//replace mynav width your nav ID
				hide:'#mynav'
			});
		});
	</script>

## License ##
MIT