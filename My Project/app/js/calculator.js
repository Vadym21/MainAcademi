(function ($) {
    $(function () {

        calculate();

        jQuery('#calculator input').keyup(function() {
            this.value = this.value.replace(/[^0-9\.,]/g, '');
            this.value = this.value.replace(/[,]/, '.');
        });

        jQuery('#calculator input').keyup(function() {
            calculate();
        });
        function calculate() {
            $('.calculator').each(function(key, val){
                calcInputs = {};
                $(this).find('input').each(function(key, val){
                    name = $(this).attr('name');
                    val = $(this).val();
                    if (!$.isNumeric(val)) {
                        switch (name) {
                            case 'project__area__1':
                                val = '';
                                break;
                            case 'project__area__2':
                                val = '';
                                break;
                            case 'project__area__3':
                                val = '';
                                break;
                            case 'project__area__4':
                                val = '';
                                break;
                            case 'project__area__5':
                                val = '';
                                break;
                            case 'project__area__6':
                                val ='';
                                break;
                            case 'project__area__7':
                                val = '';
                                break;
                            case 'project__area__8':
                                val = '';
                                break;
                            case 'project__area__9':
                                val = '';
                                break;
                            case 'project__area__10':
                                val = '';
                                break;
                            case 'improve__1':
                                val = '';
                                break;
                            case 'improve__2':
                                val = '';
                                break;
                            case 'improve__3':
                                val = '';
                                break;
                            case 'improve__4':
                                val = '';
                                break;
                            case 'improve__5':
                                val = '';
                                break;
                            case 'improve__6':
                                val ='';
                                break;
                            case 'service__1':
                                val = '';
                                break;
                            case 'service__2':
                                val = '';
                                break;
                            case 'service__3':
                                val = '';
                                break;
                            case 'service__':
                                val = '';
                                break;
                            case 'service__5':
                                val = '';
                                break;
                            default:
                                break;
                        }
                        $(this).val(val);
                    }
                    calcInputs[name] = val;
                });

                total__a = 0;
                total__b = 0;
                total__c = 0;

                // каждый угол
                total__a += calcInputs.project__area__1 * 13;

                // установка люстры
                if (calcInputs['project__area__2'] >= 1) {
                    total__a += calcInputs['project__area__2'] * 22;
                }
                // установка встраемого светильника
                if (calcInputs['project__area__3'] >= 1) {
                    total__a += calcInputs['project__area__3'] * 27;
                }
                if (calcInputs['project__area__4'] >= 1) {
                    total__a += calcInputs['project__area__4'] * 40;
                }
                if (calcInputs['project__area__5'] >= 1) {
                    total__a += calcInputs['project__area__5'] * 50;
                }
                if (calcInputs['project__area__6'] >= 1) {
                    total__a += calcInputs['project__area__6'] * 13;
                }
                if (calcInputs['project__area__7'] >= 1) {
                    total__a += calcInputs['project__area__7'] * 20;
                }
                if (calcInputs['project__area__8'] >= 1) {
                    total__a += calcInputs['project__area__8'] * 42;
                }
                if (calcInputs['project__area__9'] >= 1) {
                    total__a += calcInputs['project__area__9'] * 30;
                }
                if (calcInputs['project__area__10'] >= 1) {
                    total__a += calcInputs['project__area__10'] * 15;
                }

                total__b += calcInputs.improve__1 * 100;

                if (calcInputs['improve__2'] >= 1) {
                    total__b += calcInputs['improve__2'] * 90;
                }
                if (calcInputs['improve__3'] >= 1) {
                    total__b += calcInputs['improve__3'] * 85;
                }
                if (calcInputs['improve__4'] >= 1) {
                    total__b += calcInputs['improve__4'] * 150;
                }
                if (calcInputs['improve__5'] >= 1) {
                    total__b += calcInputs['improve__5'] * 190 ;
                }
                if (calcInputs['improve__6'] >= 1) {
                    total__b += calcInputs['improve__6'] * 50;
                }

                // каждый угол
                total__c += calcInputs.service__1 * 30;

                // установка люстры
                if (calcInputs['service__2'] >= 1) {
                    total__c += calcInputs['service__2'] * 33;
                }
                // установка встраемого светильника
                if (calcInputs['service__3'] >= 1) {
                    total__c += calcInputs['service__3'] * 35;
                }
                if (calcInputs['service__4'] >= 1) {
                    total__c += calcInputs['service__4'] * 45;
                }
                if (calcInputs['service__5'] >= 1) {
                    total__c += calcInputs['service__5'] * 15;
                }

                // total__a += ' грн.';
                jQuery(this).find('span.total__a').html(total__a);

                // total__b += ' грн.';
                jQuery(this).find('span.total__b').html(total__b);

                // total__c += ' грн.';
                jQuery(this).find('span.total__c').html(total__c);

                total__all = total__a + total__b + total__c;

                // total__all += ' грн.';
                jQuery(this).find('span.total__all').html(total__all);

            });
        }

    });
})(jQuery);
