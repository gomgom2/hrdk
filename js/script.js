$(document).ready(function () {
    const dynamicDiv = $('#dynamic-div'); // 대상 요소
    const mainVisual = $('.main-visual'); // 기준 요소
    const initialWidth = $(window).width() * 0.4; // 초기 너비 (브라우저의 25%)
    const finalWidth = $(window).width(); // 최종 너비 (브라우저의 100%)
    const initialPadding = 50; // 초기 padding 값
    const finalPadding = 0; // 목표 padding 값

    // 초기 상태 설정
    dynamicDiv.css({
        width: `${initialWidth}px`,
        position: 'fixed',
        top: '68px', // 초기 top 값
        right: '0', // 초기 위치
        left: 'auto', // 왼쪽은 auto
        paddingLeft: `${initialPadding}px`,
        paddingRight: `${initialPadding}px`,
        transition: 'all 0.05s ease-out', // 애니메이션 속도 설정
    });

    // 스크롤 이벤트
    $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop(); // 현재 스크롤 위치
        const mainVisualBottom = mainVisual.offset().top + mainVisual.outerHeight(); // .main-visual 하단 위치
        const windowHeight = $(window).height(); // 브라우저 창 높이
        const targetPosition = mainVisualBottom - windowHeight; // 브라우저 하단에 닿는 스크롤 위치

        // 스크롤 진행 비율 (0 ~ 1)
        const progress = Math.min(scrollTop / targetPosition, 1); // 최대 1로 제한

        // 새로운 너비 계산
        const newWidth = initialWidth + progress * (finalWidth - initialWidth);

        // 새로운 padding 계산
        const newPadding = initialPadding - progress * (initialPadding - finalPadding);

        // 양쪽 padding과 너비 적용
        dynamicDiv.css({
            width: `${newWidth}px`,
            paddingLeft: `${newPadding}px`,
            paddingRight: `${newPadding}px`,
            top: '68px',
            position: 'fixed',
            left: 'auto',
            right: '0',
        });

        // .main-visual 하단이 브라우저에 도달하면 absolute로 변경
        if (scrollTop >= targetPosition + 200) {
            dynamicDiv.css({
                position: 'absolute',
                top: 'auto',
                bottom: '-200px',
                left: '0',
                right: '0',
                width: '100%',
                paddingLeft: '0',
                paddingRight: '0',
            });
        }
    });

    // 브라우저 크기 변경 시 초기값 갱신
    $(window).on('resize', function () {
        const newInitialWidth = $(window).width() * 0.25;
        const newFinalWidth = $(window).width();
        dynamicDiv.css({ width: `${newInitialWidth}px` });

        // 초기값 갱신
        initialWidth = newInitialWidth;
        finalWidth = newFinalWidth;
    });

    // let lastX = 0; // 이전 마우스 X 위치 저장   
    // $('.special-card').mousemove(function (event) {
    //     // 현재 마우스 X 위치와 이전 X 위치를 비교
    //     if (Math.abs(event.pageX - lastX) > 1) { // 일정 거리 이상 움직이면 실행
    //         $('.card-container').addClass('spread');
    //     }
    //     lastX = event.pageX; // 현재 X 위치 저장
    // });

    $('.special-card').mouseover(function (event) {        
        if ($(window).width() >= 767) {
            $('.card-container').addClass('spread');
        }
    });

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

    $("#menu").load("menu.html");
    $("#footer").load("footer.html");


});