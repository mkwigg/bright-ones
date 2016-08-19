$(document).ready(function(){
  updateTitle()
  updateBody()
});


function updateTitle() {

  $("#idea-title-info").on('blur keydown', function(event){
    if (event.type ==="blur" || event.keyCode === 13) {
      editContent(this, {title: $(this).text(), id: $(this).data('title-id')})
    }
  })
}
//
function updateBody(){
  $(".all-ideas #idea-body-info").on('blur keydown', function(event){
    if (event.type === "blur" || event.keyCode === 13) {
      editContent(this, {body: $(this).text(), id: $(this).data('body-id')})
    }
  })
}

function editContent(elementHTML, updatedContent){
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + updatedContent.id,
    data: {
        title: updatedContent.title,
        body: updatedContent.body
      },
      dataType: "json",
      success: function(info){
      $('.user-flash').removeClass('hidden')
      if (info['response'] === 'successful') {
        $('.user-flash').text('Successfully updated!')
      } else {
        $('.user-flash').text('Update unsuccessful.')
      }
    }
  })
}
