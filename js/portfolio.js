$(document).ready(function () {

  $.ajax({
    url: 'src/codepen-portfolio.json',
    dataType: 'json',
    success: function (data) {

      for (let v in data.results) {

        let work = data.results[v];

        // name and url and image
        let workItem = $(`<ul class="work-item">`);
        let workurl = data.results[v].url;
        let imgUrl = work.image;
        let workImg = $(`<li><a href="${workurl}" target="_blank" ><img src="${imgUrl}" /></a></li>`);
        let workName = $(`<li class="name-info"><p class="name">${work.name} </p></li>`);

        // skill
        let liTag = $(`<li></li>`);
        let workSkill = $(`<ul class="skill-list clearfix"></ul>`);

        for (let skill of work.skills) {

          let spanTag = "";
          switch (skill) {
            case 'HTML':
              spanTag = $(`<li class="rounded-border tag-bg-html color-white">${skill}</li>`);
              break;
            case 'CSS':
              spanTag = $(`<li class="rounded-border tag-bg-css color-white">${skill}</li>`);
              break;
            case 'JavaScript':
              spanTag = $(`<li class="rounded-border tag-bg-js color-white">${skill}</li>`);
              break;
            case 'Jquery':
              spanTag = $(`<li class="rounded-border tag-bg-jquery color-white">${skill}</li>`);
              break;
            case 'AJAX':
              spanTag = $(`<li class="rounded-border tag-bg-ajax color-white">${skill}</li>`);
              break;
            case 'JSON':
              spanTag = $(`<li class="rounded-border tag-bg-json color-white">${skill}</li>`);
              break;
            case 'React':
              spanTag = $(`<li class="rounded-border tag-bg-react color-white">${skill}</li>`);
              break;
            case 'RWD':
              spanTag = $(`<li class="rounded-border  tag-bg-rwd color-white">${skill}</li>`);
              break;

            default:
              console.log('error!');

          }

          $(workSkill).append(spanTag);
        };

        //more
        let more = $(`<div class="more">`);
        let moreBtn = $(`<a class="more-slide" href="#">&#62;&#62;more</a>`);
        let moreHiddenArea = $(`<div class="more-area d-none">`);
        
        // related Posts
        let postUrl = work.relatedPostUrl;
        let relatedPostTag = $(`<p class="related-post"><a href="${postUrl}" target="_blank"> &#62;&#62;View related posts in my blog </a></p>`);
        
        // about
        let workAbout = $(`
        <p class="title">about the project</p>
        <p class="workAbout">${work.description}</p>
        `);

        $(moreHiddenArea).append(workAbout).append(workSkill);

        if (postUrl != "") {
          $(moreHiddenArea).append(relatedPostTag);
        }
        $(more).append(moreBtn).append(moreHiddenArea);

        $(workItem).append(workName).append(workImg).append(more);
        // append these HTML tags to HTML
        $('#works').append(workItem);

      };

    }
  });

  $('body').on('click', '.more-slide', function (e) {
    let target = $(this).siblings('.more-area');
    $(target).slideToggle();
    e.preventDefault();
  });

});



