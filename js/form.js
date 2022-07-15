$(document).ready(function () {
  // var reg = ;

  $("#submit-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
      },
      subject: {
        required: true,
        minlength: 4,
      },
      message: {
        required: true,
        minlength: 10,
      },
    },

    messages: {
      name: {
        required: "Please enter your name",
      },
      email: {
        required: "Please enter a valid email",
      },
      subject: {
        required: "Please enter the subject",
      },
      message: {
        required: "Please enter your message here",
      },
    },

    submitHandler: function (form) {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwkLf6pprNmvw_K009EqrQryMkpEzdX-zsFETAnMd7d2rJw8VAM789bwrQJZzqeSa9f/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
          $("#button-modal").click();
          //   alert("Form submitted successfully");
          //
          //window.location.href="https://google.com"
        },
        error: function (err) {
          alert("Something Error");
        },
      });

      //         //$('#contact-submit').html('Sent');
      //         //$('.modal-form-success').css("display","block");
      //         //$('#modal-btn').click(refreshPage);

      //         alert("Form submitted successfully");
      //         window.location.reload();
      //         // console.log("sent");
      //         // window.location.href = "index.html";
    },
  });

//   let refreshPage = () => {};
});
$('#button-dialogue-close').click(function() {
    location.reload();
});
    

