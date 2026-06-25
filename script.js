let btn = document.querySelector('#btn');
let input = document.querySelector('#user');
let getdata = (username) => {

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('avatar').src = data.avatar_url;
            document.querySelector('.item h2').textContent = data.name;
            document.querySelector('.link').textContent = '@' + data.login;
            document.querySelector('.link').href = data.html_url;
            document.getElementsByClassName('item4')[0].textContent = data.bio ? data.bio : 'No Bio Available';
            document.getElementsByClassName('num1')[0].textContent = data.public_repos;
            document.getElementsByClassName('num2')[0].textContent = data.followers;
            document.getElementsByClassName('num3')[0].textContent = data.following;
            document.getElementsByClassName('place')[0].textContent = data.location;
            document.getElementsByClassName('comp')[0].textContent = data.company ? data.company : 'Not Available';
            document.getElementsByClassName('date')[0].textContent = new Date(data.created_at).getFullYear();



        })
}
getdata('torvalds');
btn.addEventListener('click', () => {
    let username = input.value;
    getdata(username);
});
