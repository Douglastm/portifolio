const linkedin = document.querySelector('.linkedin');
const github = document.querySelector('.github');
const instagram = document.querySelector('.instagram');

linkedin.addEventListener('mouseover', function linkedinHover() {
    linkedin.src = 'assets/img/linkedin_color_icon.svg';
});

linkedin.addEventListener('mouseout', () => {
    linkedin.src = 'assets/img/linkedin_icon.svg';
});

github.addEventListener('mouseover', () => {
    github.src = 'assets/img/github_color_icon.svg';
});

github.addEventListener('mouseout', () => {
    github.src = 'assets/img/github_icon.svg';
});

instagram.addEventListener('mouseover', () => {
    instagram.src = 'assets/img/instagram_color_icon.svg';
});

instagram.addEventListener('mouseout', () => {
    instagram.src = 'assets/img/instagram_icon.svg';
});