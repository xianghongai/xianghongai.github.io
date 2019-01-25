(function ($) {
  $(document).ready(function () {
  console.log("本博客由 Hexo 强力驱动，主题Frok了官方的 Landscape 主题进行了调整");
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function () {
    isSearchAnim = true;
  };

  var stopSearchAnim = function (callback) {
    setTimeout(function () {
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function () {
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function () {
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function () {
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  $('body').on('click', function () {
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function (e) {
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length) {
      var box = $('#' + id);

      if (box.hasClass('on')) {
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
        '<input class="article-share-input" value="' + url + '">',
        '<div class="article-share-links">',
        '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
        '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
        '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
        '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
        '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function (e) {
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function () {
    $(this).select();
  }).on('click', '.article-share-box-link', function (e) {
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox) {
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('body'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function () {
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function () {
    setTimeout(function () {
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function () {
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#page').on('click', function () {
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });


  // Back Top

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".js_top").removeClass('hidden').fadeIn(1500);
    } else {
      $(".js_top").fadeOut(500).addClass('hidden');
    }
  });

  $(".js_top").on('click', function () {
    console.log('fuck');
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  // Search
  //#region Search
  /*
  var searchFunc = function (path, search_id, content_id) {
    'use strict';
    $.ajax({
      url: path,
      dataType: "xml",
      success: function (xmlResponse) {
        // get the contents from search data
        var datas = $("entry", xmlResponse).map(function () {
          return {
            title: $("title", this).text(),
            content: $("content", this).text(),
            url: $("url", this).text()
          };
        }).get();
        var $input = document.getElementById(search_id);
        var $resultContent = document.getElementById(content_id);
        $input.addEventListener('input', function () {
          var str = '<ul class=\"search-result-list\">';
          var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
          $resultContent.innerHTML = "";
          if (this.value.trim().length <= 0) {
            return;
          }
          // perform local searching
          datas.forEach(function (data) {
            var isMatch = true;
            var content_index = [];
            var data_title = data.title.trim().toLowerCase();
            var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
            var data_url = data.url;
            var index_title = -1;
            var index_content = -1;
            var first_occur = -1;
            // only match artiles with not empty titles and contents
            if (data_title != '' && data_content != '') {
              keywords.forEach(function (keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);
                if (index_title < 0 && index_content < 0) {
                  isMatch = false;
                } else {
                  if (index_content < 0) {
                    index_content = 0;
                  }
                  if (i == 0) {
                    first_occur = index_content;
                  }
                }
              });
            }
            // show search results
            if (isMatch) {
              str += "<li><a href='" + data_url + "' class='search-result-title' target='_blank'>" + "> " + data_title + "</a>";
              var content = data.content.trim().replace(/<[^>]+>/g, "");
              if (first_occur >= 0) {
                // cut out characters
                var start = first_occur - 6;
                var end = first_occur + 6;
                if (start < 0) {
                  start = 0;
                }
                if (start == 0) {
                  end = 10;
                }
                if (end > content.length) {
                  end = content.length;
                }
                var match_content = content.substr(start, end);
                // highlight all keywords
                keywords.forEach(function (keyword) {
                  var regS = new RegExp(keyword, "gi");
                  match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                })
                str += "<p class=\"search-result\">" + match_content + "...</p>"
              }
            }
          })
          $resultContent.innerHTML = str;
        })
      }
    })
  }

  var inputArea = document.querySelector("#local-search-input");
  var getSearchFile = function () {
    var path = "/search.xml";
    searchFunc(path, 'local-search-input', 'local-search-result');
  }

  inputArea.onfocus = function () {
    getSearchFile();
  }

  var $resetButton = $("#search-form .fa-times");
  var $resultArea = $("#local-search-result");

  inputArea.oninput = function () {
    $resetButton.show();
  }
  resetSearch = function () {
    $resultArea.html("");
    document.querySelector("#search-form").reset();
    $resetButton.hide();
    $(".no-result").hide();
  }

  inputArea.onkeydown = function () {
    if (event.keyCode == 13) return false;
  }

  $resultArea.bind("DOMNodeRemoved DOMNodeInserted", function (e) {
    if (!$(e.target).text()) {
      $(".no-result").show(200);
    } else {
      $(".no-result").hide();
    }
  });
  */
  //#endregion

  });
})(jQuery);

(function (window) {
  'use strict';

  var Even = {};

  Even.backToTop = function () {
    var $backToTop = $('.js-top');

    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $backToTop.fadeIn(1000);
      } else {
        $backToTop.fadeOut(1000);
      }
    });

    $backToTop.click(function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  };

  Even.visits = function () {
    var $visits = $('.post-visits');

    function updateVisits(dom, time) {
      var text = dom.text() + ' ' + time;
      dom.text(text).css('visibility', 'visible');
    }

    function addCounter(Counter) {
      var query = new AV.Query(Counter);

      var url = $visits.data('url').trim();
      var title = $visits.data('title').trim();

      query.equalTo('url', url);
      query.find().then(function (results) {
        if (results.length > 0) {
          var counter = results[0];
          counter.save(null, {
            fetchWhenSave: true
          }).then(function (counter) {
            counter.increment('time', 1);
            return counter.save();
          }).then(function (counter) {
            updateVisits($visits, counter.get('time'));
          });
        } else {
          var newcounter = new Counter();
          newcounter.set('title', title);
          newcounter.set('url', url);
          newcounter.set('time', 1);

          newcounter.save().then(function (counter) {
            updateVisits($visits, newcounter.get('time'));
          });
        }
      }, function (error) {
        console.log('Error:' + error.code + " " + error.message);
      });
    }

    function showTime(Counter) {
      $visits.each(function () {
        var $this = $(this);
        var query = new AV.Query(Counter);
        var url = $this.data('url').trim();

        query.equalTo('url', url);
        query.find().then(function (results) {
          if (results.length === 0) {
            updateVisits($this, 0);
          } else {
            var counter = results[0];
            updateVisits($this, counter.get('time'));
          }
        }, function (error) {
          console.log('Error:' + error.code + " " + error.message);
        });
      })
    }

    if (typeof AV === 'object') {
      var Counter = AV.Object.extend('Counter');
      console.log(Counter);
      if ($visits.length === 1) {
        addCounter(Counter);
      } else {
        showTime(Counter);
      }
    }
  }

  window.Even = Even;
})(window);