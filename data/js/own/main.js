$(document).ready(
    function() {
        console.log('Omni Tools Init');
        function getCPM(row) {
            if(0 != $(row).children('td').length && !$(row).hasClass('has-cpm')) {

                reach = $(row).children('td:nth-child(4)').children('b').html();
                if(reach == undefined) {
                    return;
                }
                price = $(row).children('td:nth-child(5)').children('b').html();
                if(price == undefined) {
                    return;
                }
                reach = reach.replace(/<span class=\"num_delim\"> <\/span>/g, '');
                reach = reach.substr(0, reach.indexOf(' '));
                reach = parseInt(reach);
                price = price.replace(/<span class=\"num_delim\"> <\/span>/g, '');
                price = parseInt(price);
                cpm = "&infin;";
                if(reach > 0) {
                    cpm = price * 1000 / reach;
                    cpm = cpm.toFixed(2);
                }
                $(row).children('td:nth-child(5)').append(' / <b>' + cpm + ' cpm</b>')
                $(row).addClass('has-cpm');
            }
        }

        function getAllCPMs() {
            $('#exchange_comm_search_table tr').each(function() {
                getCPM(this);
            });
        }

        getAllCPMs();
        setInterval(getAllCPMs, 1000);

    }

);