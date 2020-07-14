$(document).ready(function () {

  $.ajax({
    url: 'src/codepen-portfolio.json',
    dataType: 'json',
    success: function (data) {

      for (let v in data.results) {


        let work = data.results[v];

        // HTML Tags for work information
        let workInfo = $(`<ul class="work-item">`);

        let imgUrl=work.image;
        let imgTag = $(`<li><img src="${imgUrl}" /></li>`);
        let nameTag = $(`<li><p class="title">Name :</p><p class="name">${work.name} </p></li>`);


        // skill
        let liTag = $(`<li></li>`);
        let SkillListTag = $(`<ul class="skill-list clearfix"><p class="title">Skills :</p</ul>`);
        // make every value in skills array become html tags
        // and append these tags into skillListTag
        for (let skill of work.skills) {
          
          let spanTag = "";
          switch (skill) {
            case 'HTML':
              spanTag = $(`<li class="rounded-border tag-bg-html">${skill}</li>`);
              break;
            case 'CSS':
              spanTag = $(`<li class="rounded-border tag-bg-css">${skill}</li>`);
              break;
            case 'JavaScript':
              spanTag = $(`<li class="rounded-border tag-bg-js">${skill}</li>`);
              break;
            case 'Jquery':
              spanTag = $(`<li class="rounded-border tag-bg-jquery">${skill}</li>`);
              break;
            case 'AJAX':
              spanTag = $(`<li class="rounded-border tag-bg-ajax">${skill}</li>`);
              break;
              case 'JSON':
                spanTag = $(`<li class="rounded-border tag-bg-json">${skill}</li>`);
                break;
            case 'React':
              spanTag = $(`<li class="rounded-border tag-bg-react">${skill}</li>`);
              break;
            case 'RWD':
              spanTag = $(`<li class="rounded-border  tag-bg-rwd">${skill}</li>`);
              break;

            default:
              console.log('error!');

          }

          // let spanTag = $(`<li>${skill}</li>`);
          $(SkillListTag).append(spanTag);

        };

        $(liTag).append(SkillListTag);

        // url
        let url = data.results[v].url;
        let moreAreaTag=$(`<div class="more">`);
        let moreATag = $(`<a class="more-slide" href="#">&#62;&#62;more...</a>`);

      
        // description
        let moreHiddenArea=$(`<div class="more-area d-none">`);
        let postUrl=work.relatedPostUrl;
        let relatedPostTag=$(`<p class="related-post"><a href="${postUrl}" target="_blank"> &#62;&#62;View related posts in my blog </a></p>`);
        let des=$(`
        <p class="title">about the project</p>
        <p class="description">${work.description}</p>
        `);

        $(moreHiddenArea).append(des);

        if (postUrl!=""){
          $(moreHiddenArea).append(relatedPostTag);
        }
        $(moreAreaTag).append(moreATag).append(moreHiddenArea);

        $(workInfo).append(imgTag).append(nameTag).append(liTag).append(moreAreaTag);
        // append these HTML tags to HTML
        $('#works').append(workInfo);

      };

    }
  });

  $('body').on('click','.more-slide',function(e){
    let target=$(this).siblings('.more-area');
    $(target).slideToggle();
    e.preventDefault();
  });

});



