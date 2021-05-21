$(document).ready(() => {
    $('.burgerBtn').click((e) => {
        e.preventDefault();
        $('.navbar').toggleClass('burgerBtn-active');
    });

    $('.favorite').each((i, item) => {
        // console.log(item);
        $(item).click(e => {
            e.preventDefault();
            $(item).toggleClass('active');
        })
    })

    $('#goToSignup').click(() => {
        window.location = '../signup.html';
    })
});