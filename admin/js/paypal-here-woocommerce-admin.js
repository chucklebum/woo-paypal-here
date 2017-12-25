(function ($) {
    'use strict';
    $(function () {
        $('#woocommerce_angelleye_paypal_here_generate_woocommerce_rest_api_push_button').click(function () {
            alert('hi');
            $.ajax({
                method: 'POST',
                dataType: 'json',
                url: ajaxurl,
                data: {
                    action: 'angelleye_paypal_here_woocommerce_update_api_key',
                    security: woocommerce_admin_api_keys.update_api_nonce,
                    key_id: '',
                    description: 'PayPal Here',
                    user: woocommerce_admin_api_keys.user,
                    permissions: 'read_write',
                    enabled: $('#woocommerce_angelleye_paypal_here_enabled').is(':checked'),
                    paypal_here_endpoint_url: $('#woocommerce_angelleye_paypal_here_paypal_here_endpoint_url').val(),
                    paypal_here_endpoint_title: $('#woocommerce_angelleye_paypal_here_paypal_here_endpoint_title').val()
                },
                success: function (response) {
                   var data = response.data;
                   if ( response.success ) {
                       if ( 0 < data.consumer_key.length && 0 < data.consumer_secret.length ) {
                           
                           $('#woocommerce_angelleye_paypal_here_generate_woocommerce_rest_api_key_value').val('...'+data.truncated_key);
                       }
                       $( 'h2').append( '<div class="wc-api-message updated"><p>' + 'API Key generated successfully.' + '</p></div>' );
                       $('#woocommerce_angelleye_paypal_here_generate_woocommerce_rest_api_push_button').closest('tr').hide();
                       
                   } else {
                      $( 'h2').append( '<div class="wc-api-message error"><p>' + response.data.message + '</p></div>' );
                   }
                }
            });
        });
    });
})(jQuery);
