By using 

```
$('a.foo').binder('click', callback); // this will use a.foo as identity so making another $('a.foo') call will not work
```

to avoid that, use it like this

```
$('a.foo').binder('my identiy', 'click', callback);
```

you can also write your own stuff like, but it's not recommended

```
$('a.foo2').binder('my identity', function () {
    
    $('.start').click(callback); //... etc
});
```

also

```
$('.z2').binder(function () {
    
    $('.other').tipsy(); // ...
});
```

although, nothing is stopping you from using $('body').on('click', '.selector', callback); this is just maybe easier for some people