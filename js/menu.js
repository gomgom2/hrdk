$(document).ready(function () {
	    $('.nav-menu').hover(
        function() {
            $('.nav-container').removeClass('max-h-2').addClass('max-h-100');
        },
        function() {
            $('.nav-container').removeClass('max-h-100').addClass('max-h-2');
        }
    );

    $('.number').hover(
        function() {
            $('.nav-container').removeClass('max-h-2').addClass('max-h-100');
        },
        function() {
            $('.nav-container').removeClass('max-h-100').addClass('max-h-2');
        }
    );

    $('.nav-icon').on('click', function () {
        $(this).toggleClass('open'); // 'active' 클래스를 토글
        $('.nav-container-2').toggleClass('open'); // 'active' 클래스를 토글
    });
});