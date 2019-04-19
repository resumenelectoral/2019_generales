$(".box-item").click(function() {window.location = $(this).find("a").attr("href"); return false;});
$(".btn-spe-play").click(function() {var spe_id = $(this).attr('spe_id'); $(".btn-spe-play").show(); $(".btn-spe-pause").hide(); $(this).hide(); $("#btn-pause-"+spe_id).show(); return false;});
$(".btn-spe-pause").click(function() {var spe_id = $(this).attr('spe_id'); $(this).toggle(); $("#btn-play-"+spe_id).toggle(); return false;});
