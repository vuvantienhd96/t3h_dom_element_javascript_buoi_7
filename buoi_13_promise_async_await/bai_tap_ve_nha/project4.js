$(document).ready(function() {
    var api = 'b7ef181bb0f3b3da54eb8b618c7ae544';
    var api2 = 'bfe692d5d322ff7c2eaec64cac9b705a';
    var api3 = 'ab6390b400dc18ff693a1b964ac3630a';
    var keyword;
    loadHeadlines();    // Thêm các tin tức lên headline

    // Append các bài báo theo chuyên mục
    $("#business").click(function() {
        $("#title").html("Kinh tế - Tài chính");
        $(".news").html("");
        $(".news").append(loadNews('business'));
    });

	$('#technology').click(function() {
	    $("#title").html("Công nghệ");
	    $(".news").html("");
        $(".news").append(loadNews('technology'));
	});

	$('#entertainment').click(function() {
	    $("#title").html("Giải trí");
        $(".news").html("");
        $(".news").append(loadNews('entertainment'));
	});

	$('#sports').click(function() {
	    $("#title").html("Thể thao");
        $(".news").html("");
        $(".news").append(loadNews('sports'));
	});

	$('#health').click(function() {
	    $("#title").html("Y tế");
        $(".news").html("");
        $(".news").append(loadNews('health'));
	});

	$('#science').click(function() {
	    $("#title").html("Khoa học");
        $(".news").html("");
        $(".news").append(loadNews('science'));
	});

    // Thêm các bài báo headline
    function loadHeadlines() {
        $(".loading").show();
        fetch('https://gnews.io/api/v4/top-headlines?token='+ api + '&lang=en') //Fetch the news from API
            .then(function (response) {
        	    return response.json();
            })
        	.then(function(data){
                appendNews(data);   // Sử dụng hàm appendNews để thêm bài báo vô
            })
            .then(function(){
                $(".loading").hide();
            });
    }

    // Lọc bài báo theo chuyên mục
    function loadNews(topic) {
        $(".loading").show();
        fetch('https://gnews.io/api/v4/top-headlines?topic=' + topic + '&token=' + api2 + '&lang=en')
            .then(function (response) {
        	    return response.json();
            })
            .then(function (data) { //Read the articles and parse data to HTML
        	    $(".new").append(appendNews(data));
            })
            .then(function(){
        	    $(".loading").hide();
            });

    }

    // Tìm các bài báo theo keyword
    $("#searchBtn").click(function() {
        keyword = $("#searchKeyword").val();
        $(".news").html("");
        if (keyword != '') {
            $(".loading").show();
            $("#title").html(keyword.substring(0, 1).toUpperCase() + keyword.substring(1).toLowerCase());
            fetch('https://gnews.io/api/v4/search?q=' + keyword + '&token='+ api3 +'&lang=en')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    appendNews(data);
                })
                .then(function(){
                    $(".loading").hide();
                });
        }
    });

    $("#advancedSearchBtn").click(function() {
        keyword = $("#searchAdvancedKeyword").val();
        $(".news").html("");
        var maxDate = new Date($('#endDate').val()).toISOString().split('T')[0] + 'T23:59:59Z';
        var minDate =  new Date($('#startDate').val()).toISOString().split('.')[0] + 'Z';
        if (keyword != '' && minDate != '' && maxDate != '') {
            $(".loading").show();
            $("#title").html(keyword.substring(0, 1).toUpperCase() + keyword.substring(1).toLowerCase());
            fetch('https://gnews.io/api/v4/search?q=' + keyword + '&from=' + minDate + '&to=' + maxDate + '&token='+ api3 +'&lang=en')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    appendNews(data);
                    console.log(startDate);
                    console.log(endDate);
                })
                .then(function(){
                    $(".loading").hide();
                });
        }
    })

    // Hàm thêm các bài báo
    function appendNews(data) {
        for (var i = 1; i < 9; i++) {
            $(".news").append('<div class="col-3 border-hover"><a target="_blank" style="text-decoration: none" href="' + data.articles[i].url + '"><img class="col-12" src ="' + data.articles[i].image + '"></img><h3 class="col-12" style="color: black">' + data.articles[i].title + '</h3></a><div class="col-12"><i>Public by <span style="color: red">' + data.articles[i].source.name + '</span> at <span style="color: red">' + data.articles[i].publishedAt + '</span></i><div class="col-12">' + data.articles[i].description + '</div></div>');
        }
    }


})

