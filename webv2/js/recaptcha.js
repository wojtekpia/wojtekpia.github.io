function recaptchaCallback() {
    $('#submit-btn').removeAttr('disabled');
};
  window.jQuery || document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"><\/script>')
  function submitRegistrationForm(element) {
    var $element = jQuery(element), missing = '';
    var required = {contact_email: 'Email'};
    var customRequired = {};
    jQuery.each(jQuery('input,textarea,select').filter('[required]:visible'), function() {
      customRequired[this.id] = jQuery(this).siblings('label').text().replace("*", "");
    });
    var questions = {answers_3992: 'Where did you hear about us?', answers_3995: 'Are you working with a Realtor', answers_3996: 'Yes, I agree to receive email updates from Park Hill'}
    required = jQuery.extend(required, customRequired, questions);

    email = document.getElementById("contact_email").value;
    if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email))  {
      alert("Invalid email address");
      return (false);
    }

    jQuery.each(required, function(id, msg) {
      if (jQuery('[id^="'+ id+ '"]').length && !jQuery('[id^="'+ id+ '"]:checkbox, [id^="'+ id+ '"]:radio').is(':checked') && !jQuery('input[id="'+ id+ '"]:not(:checkbox, :radio), textarea#'+ id).val() && !jQuery('select#'+ id+ ', input#'+ id+ '_other_text').val()) missing += '- '+ msg+ '\r\n';
    });
    if (missing != '') { alert('The following fields are required:\r\n'+ missing); return false; }
    $element.closest('form').submit(function() { element.onclick = null; });
    $element.closest('form').submit();

  }
  window.onload = function() {
    document.getElementById('are_you_simulated').style.display = 'none';
  }