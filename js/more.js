$.ajax({
    url:'./ajax/data.json',
    success:function(data){
        let elCoffee ='';    let elCoffee1 =''; let elCoffee2 = '';
        let elPretzel1 = '';  let elPretzel2 ='';
        let elStix1 = '';    let elStix2 = '';
        let elAde = '';      let elAde2 = '';
        let elHotdog = '';
        let elDip = ''; let elAdd ='';
    
    data.pretzel1.forEach(function(value) {
        elPretzel1 += `<div class="grid_entry" >
            <article>
                <a href="#" class="grid_image" >
                    <img src="${value.src}" alt="">
                </a>
                <div class="grid_content">
                    <h3 class="entry_content_header">
                        <a href="#">
                            <span>${value.title}</span>
                            <p>${value.name}</p>
                        </a>
                    </h3>
                </div>
            </article>
        </div>`;
    });
    data.pretzel2.forEach(function(value) {
        elPretzel2 += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.stix1.forEach(function(value) {
        elStix1 += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.stix2.forEach(function(value) {
        elStix2 += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.ade1.forEach(function(value) {
        elAde += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.ade2.forEach(function(value) {
        elAde2 += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.coffee.forEach(function(value) {
        elCoffee += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.coffee1.forEach(function(value) {
        elCoffee1 += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.coffee2.forEach(function(value){
        elCoffee2 +=`<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    }) 
    data.hotdog.forEach(function(value) {
        elHotdog += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    });
    data.dip.forEach(function(value) {
        elDip += `<div class="grid_entry" >
        <article>
            <a href="#" class="grid_image" >
                <img src="${value.src}" alt="">
            </a>
            <div class="grid_content">
                <h3 class="entry_content_header">
                    <a href="#">
                        <span>${value.title}</span>
                        <p>${value.name}</p>
                    </a>
                </h3>
            </div>
        </article>
    </div>`;
    }); 
    data.place.forEach(function(value){
        elAdd += `<li id="${value.id}">
        <div class="store-li">
            <div class="store-desc">
                <div class="store-text-wrap">
                    <div class="store-text">
                        <h3>${value.name}</h3>
                        <address>${value.address}</address>
                        <div class="info">
                            <p class="tel_num">
                            <img src="${value.src1}"> 
                            ${value.num}</p>
                            <p class="open_time">
                                <img src="${value.src2}"> 
                                <span>${value.time}</span>
                            </p>
                        </div>`;
                        if(value.pic != ""){
                            elAdd += `<div class="st-cont">
                            <div class="${value.pic}">${value.pic_n}</div>
                            <div class="${value.deli}">${value.del_n}</div>
                        </div>`;
                        }
                
                    elAdd += `</div>
                </div>

                <div class="st-pin">
                    <img class="img" src="img/search/st-pin.png">
                    <img class="act" src="img/search/st-pin_act.png">
                </div>
            </div>
        </div> 
    </li>`;
    });

    function base(){
        $('#pretzel_list').html(elPretzel1);
        $('#stix_list').html(elStix1);
        $('#hotdog_list').html(elHotdog);
        $('#dip_list').html(elDip);
        $('#ade_list').html(elAde);
        $('#coffee_list').html(elCoffee);
        $('.st-wrap ul').html(elAdd);
    }
    base();
        
   
    
    function search(){
        elAdd = "";
        let si = $("#si option:selected").val();
        let gu = $("#gu option:selected").val();
    
        data.place.forEach(function(value){
            let address = value.address;
            let add2 = address.match(si);
            let add3 = address.match(gu);
        
            if(add2){
                if(add3){
                    elAdd += `<li id="${value.id}">
                <div class="store-li">
                    <div class="store-desc">
                        <div class="store-text-wrap">
                            <div class="store-text">
                                <h3>${value.name}</h3>
                                <address>${value.address}</address>
                                <div class="info">
                                    <p class="tel_num">
                                    <img src="${value.src1}"> 
                                    ${value.num}</p>
                                    <p class="open_time">
                                        <img src="${value.src2}"> 
                                        <span>${value.time}</span>
                                    </p>
                                </div>`;
                                if(value.pic != ""){
                                    elAdd += `<div class="st-cont">
                                    <div class="${value.pic}">${value.pic_n}</div>
                                    <div class="${value.deli}">${value.del_n}</div>
                                </div>`;
                                }
                        
                            elAdd += `</div>
                        </div>
        
                        <div class="st-pin">
                            <img class="img" src="img/search/st-pin.png">
                            <img class="act" src="img/search/st-pin_act.png">
                        </div>
                    </div>
                </div> 
            </li>`;
                            }
            }
                     
        });

        $('.st-wrap ul').html(elAdd);
        console.log(elAdd)
    }
    $('#search_button').on('click',function(){
        search();
    
    });
  
 


    $('#pretzel').on('click',function(){
        $('#pretzel_list').append(elPretzel2);
        $('#pretzel').hide();
    });

    $('#stix').on('click',function(){
        $('#stix_list').append(elStix2);
        $('#stix').hide();
    });
    
    $('#ade').on('click',function(){
        $('#ade_list').append(elAde2);
        $('#ade').hide();
    });
    

    let num = 0;
    function add(){
    $('#coffee').on('click',function(){
        if(num == 0){
        $('#coffee_list').append(elCoffee1);
        num++;
    }else if( num==1){
            $('#coffee_list').append(elCoffee2);
            $('#coffee').hide();
        
        }
    });
    }
    add();
    }
})