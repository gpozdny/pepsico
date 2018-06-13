"use strict";

$(document).ready(function () {

    // filter dropdown
    let $dropdown = $('.filter__dropdown'),
        $filter = $('.list__filter'),
        $overlayMentor = $('.mentor__overlay'),
        $filterIcon = $('.list__filter');

    $filter.click(function () {
        toggleFilter();
    });

    $overlayMentor.on('click', function () {
        toggleFilter();
    });

    function toggleFilter() {
        $overlayMentor.toggleClass('shown');
        $dropdown.toggleClass('filter__dropdown--active');
        $filter.toggleClass('list__filter--active');
    }


    // popups

    let $profileItem = $('.profile__item'),
        $interview = $('#interview'),
        $briefing = $('#briefing'),
        $presentation = $('#presentation'),
        $finals = $('#finals'),
        $overlay = $('.profile__modals-overlay'),
        $modal_briefing = $('.profile__modals'),
        $modal_presentation = $('.profile__modals-presentation'),
        $modal_fail = $('.profile__modals-fail'),
        $modal_deadline = $('.profile__modals-deadline'),
        $modal_finals = $('#finalsModal'),
        $modal_success = $('#successModal'),
        $placeholder = $('#placeholder'),
        $cross = $('.profile__modal-cross'),
        $btnClose = $('.btn-close'),
        $wrapper = $('.wrapper');

    function addBlurredOverlay() {
        $overlay.addClass('profile__modals-overlay--active');
        $wrapper.addClass('blur');
    }

    $('[data-modal]').on('click', function () {
        let $this = $(this),
            $dataType = $this.data('modal');

        removeModals();
        addBlurredOverlay();

        console.log($dataType);

        switch ($dataType) {
            case 'add-brief':
                $modal_briefing.css("display", "block");
                break;
            case 'add-presentation':
                $modal_presentation.css("display", "block");
                break;
            case 'fail':
                $modal_fail.css("display", "block");
                break;
            case 'deadline':
                $modal_deadline.css("display", "block");
                break;
            case 'success':
                $modal_success.css("display", "block");
                break;
            case 'final':
                $modal_finals.css("display", "block");
                break;
        }

    });

    $cross.on('click', function () {
        removeModals();
    });

    $btnClose.on('click', function () {
        removeModals();
    });

    function removeModals() {
        $('[data-popup]').css("display", "none");
        $overlay.removeClass("profile__modals-overlay--active");
        $wrapper.removeClass('blur');
    };

    // When the user clicks anywhere outside of the modal, close it
    let modal = document.getElementById('modal');
    window.onclick = function (event) {
        if (event.target == modal) {
            removeModals();
        }
    };

    // items' backgrounds
    if ($interview.is('.profile__item--description')) {
        $interview.addClass('profile__item-icon--interview-white')
    }

    if ($briefing.is('.profile__item--description')) {
        $briefing.addClass('profile__item-icon--idea-white')
    }

    if ($finals.is('.profile__item--description')) {
        $finals.addClass('profile__item-icon--finals-active')
    }

    if ($presentation.is('.profile__item--description')) {
        $presentation.addClass('profile__item-icon--presentation-active')
    }

    // participant list 

    let $participant = $('.participant');

    $participant.on('click', function () {
        $(this).addClass("participant--active").siblings().removeClass("participant--active");
    })
    // jQuery Knob

    let $dial = $(".dial");

    $dial.knob({
        'min': 0,
        'max': 10,
        'rotation': "anticlockwise",
        'release': function (v) {
            let color;
            let dataHigh = $dial.data("high");
            let dataLow = $dial.data("low");
            if (v <= dataLow) {
                color = '#E72E36';
            } else if (v < dataHigh) {
                color = '#F5913B';
            } else {
                color = '#009639';
            }
            this.$.trigger('configure', {
                "fgColor": color,
                "inputColor": color
            });
        }
    });
    // disable ENTER on input
    $dial.keypress(function (e) {
        if (e.which == 13) e.preventDefault();
    });

    // brief + presentation width ! crutch !
    let $projects = $('.participant-info__right');

    if ($projects.length == 1) {
        $projects.css("width", "50%");
    } else $projects.css("width", "25%");


    // popups files

    let $inputName = $('.profile__attachments-input'),
        $imgInput = $('#imgInput'),
        $docxInput = $('#docxInput'),
        $descInput = $('#descInput'),
        $presentInput = $('#presentInput'),
        $docxPresentation = $('#docxPresentation'),
        $pptx = $('#pptx'),
        $docx = $('#docx'),
        $image = $('#imageWrap'),
        $labelDocx = $('#labelDocx'),
        $labelImage = $('#labelImage'),
        $labelPresentation = $('#labelPresentation'),
        $labelDesc = $('#labelDesc'),
        $attchBtn = $('.profile__attachments-btn');

    // delete attachments

    $('[data-close]').on('click', function () {
        let $this = $(this),
            $dataType = $this.data('close');

        console.log($dataType);
        switch ($dataType) {
            case 'docx':
                deleteDocx();
                validateProject();
                break;
            case 'img':
                deleteImg();
                validateProject();
                break;
            case 'description':
                deleteDescription();
                validatePresent();
                break;
            case 'presentation':
                deletePresentation();
                validatePresent();
                break;
        }

    });

    function deleteDocx() {
        $docxInput.wrap('<form>').closest('form').get(0).reset();
        $docxInput.unwrap();
        $docx.removeClass('show');
        $docx.addClass('hidden');
        $labelDocx.removeClass('hidden');
        $labelDocx.addClass('show');
    };

    function deleteImg() {
        $imgInput.wrap('<form>').closest('form').get(0).reset();
        $imgInput.unwrap();
        $image.removeClass('show');
        $image.addClass('hidden');
        $labelImage.removeClass('hidden');
        $labelImage.addClass('show');
    };

    function deleteDescription() {
        $descInput.wrap('<form>').closest('form').get(0).reset();
        $descInput.unwrap();
        $docxPresentation.removeClass('show');
        $docxPresentation.addClass('hidden');
        $labelDesc.removeClass('hidden');
        $labelDesc.addClass('show');
    };

    function deletePresentation() {
        $imgInput.wrap('<form>').closest('form').get(0).reset();
        $imgInput.unwrap();
        $pptx.removeClass('show');
        $pptx.addClass('hidden');
        $labelPresentation.removeClass('hidden');
        $labelPresentation.addClass('show');
    };

    function changeDocx() {
        $docx.removeClass('hidden');
        $docx.addClass('show');
        $labelDocx.removeClass('show');
        $labelDocx.addClass('hidden');
    };

    function changeImage() {
        $image.removeClass('hidden');
        $image.addClass('show');
        $labelImage.removeClass('show');
        $labelImage.addClass('hidden');
    };

    function changeDesc() {
        $docxPresentation.removeClass('hidden');
        $docxPresentation.addClass('show');
        $labelDesc.removeClass('show');
        $labelDesc.addClass('hidden');
    };

    function changePresentation() {
        $pptx.removeClass('hidden');
        $pptx.addClass('show');
        $labelPresentation.removeClass('show');
        $labelPresentation.addClass('hidden');
    };

    function previewFile() {

        let preview = document.querySelector('#image');
        let file = document.querySelector('#imgInput').files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    };

    // check forms

    function validateProject() {
        let $doc = $('#docxInput'),
            $img = $('#imgInput'),
            $name = $('#projectName'),
            $btn = $('#submitProject');

        if ($doc.get(0).files.length !== 0 && $img.get(0).files.length !== 0 && $name.val().length !== 0) {
            $btn.addClass('btn--active');
        } else $btn.removeClass('btn--active');
    };

    function validatePresent() {
        let $desc = $('#descInput'),
            $presentation = $('#presentInput'),
            $btnPresent = $('#submitPresent');

        if ($desc.get(0).files.length !== 0 && $presentation.get(0).files.length !== 0) {
            $btnPresent.addClass('btn--active');
        } else $btnPresent.removeClass('btn--active');
    };

    function checkLength() {
        let $comment = $('.participant__assessment-input'),
            $btnMentor = $('#btnMentor');

        $btnMentor.toggleClass('btn--active', $comment.val().length !== 0); // preferable
    };

    function checkForm() {
        let $btnAuth = $('.form__auth-btn'),
            $authInputs = $('.form__login, .form__password');
        $btnAuth.toggleClass('btn--white', $authInputs.val().length !== 0); // preferable
    };
});

    // analytics

    let usersEvent = "users",
    usersEventStream = "stream",
    mentorsEvent = "mentors",
    universitiesEvent = "universities",
    specialitiesEvent = "specialities",
    allData = "allData";

getData(allData);

function getData(type) {

    console.log(type);
    let dateFrom = $(".js-range-from").val(),
        dateTo = $(".js-range-to").val(),
        userSelection = $(".js-user-selection").val(),
        mentorSelection = $(".js-mentor-selection").val(),
        streamSelection = $(".js-stream-selection").val(),
        allDataUrl = 'assets/json/params.json',
        usersUrl = 'assets/json/chartsUsers.json',
        mentorsUrl = 'assets/json/chartsMentor.json',
        activeUrl = 'assets/json/params.json';

    if (!dateFrom || !dateTo) {
        return;
    }

    if (type === usersEvent) {
        activeUrl = 'assets/json/chartsUsers.json';
        usersData(activeUrl);
    } else if (type === mentorsEvent) {
        activeUrl = 'assets/json/chartsMentor.json';
        usersData(activeUrl);
    } else if (type === usersEventStream) {
        activeUrl = 'assets/json/chartsUsersStream.json';
        usersData(activeUrl);
    } 

    usersData(activeUrl);

    function usersData(activeUrl) {
        $.ajax({
            type: 'GET',
            url: activeUrl,
            data: {
                dateFrom: dateFrom,
                dateTo: dateTo,
                userSelection: userSelection,
                mentorSelection: mentorSelection,
                streamSelection: streamSelection
            },
            dataType: 'json',
            success: function (data) {;
                (function renderData() {
                    for (let key in data) {
                        for (let keyInner in data[key]) {
                            let obj = data[key][keyInner];
                            let $container = $(`[data-chart="${keyInner}"]`);
                            $('.js-rate', $container).text(obj.percentage + '%');

                            $('.js-chart', $container).css("height", obj.percentage + '%')
                                .css("background-color", changeData(obj.percentage));
                            $('.js-passed', $container).text(obj.passed);
                            $('.js-odds', $container).text(obj.odds + '%');
                            $('.js-number', $container).text(obj.number);
                        }
                    }
                })(data);

                function changeData(percentage) {
                    if (percentage < 90 && percentage >= 75) {
                        return "#1F66B1";
                    } else if (percentage < 75 && percentage >= 50) {
                        return "#0085CA";
                    } else if (percentage < 50 && percentage >= 35) {
                        return "#2698D3";
                    } else if (percentage >= 90 && percentage <= 100) {
                        return "#004C97";
                    } else if (percentage <= 35) {
                        return "#00AAE2";
                    }
                }
            }
        });
    }
}

// JSON URLs

let jsonURLs = {
    cities: 'assets/json/cities.json',
    universities: 'assets/json/universities.json',
    universitiesStreams: 'assets/json/universitiesStreams.json',
    specialities: 'assets/json/specialities.json',
    specialitiesStream: 'assets/json/specialitiesStreams.json',
    branchesMain: 'assets/json/branchesMain.json',
    branchesSecondary: 'assets/json/branchesSecondary.json'
};

// END

// GET DATA

let citiesNames,
    citiesValues,
    universitiesNames,
    universitiesValues,
    specialitiesNames,
    specialitiesValues,
    branchesMainNames,
    branchesMainValues,
    branchesSecondaryNames,
    branchesSecondaryValues;


getDataCircles();

function getDataCircles(type){

    // if(type === universitiesEvent){
    //     $.ajax({
    //         type: 'GET',
    //         url: jsonURLs.universitiesStreams,
    //         data: {
    //         },
    //         dataType: 'json',
    //         success: function (data) {;
    //             (function renderData() {
    //                 universitiesNames = Object.keys(data.universities);
    //                 universitiesValues = Object.values(data.universities);
    //             })(data);
    //         }
    //     });

    // } else if (type === specialitiesEvent){
    //     $.ajax({
    //         type: 'GET',
    //         url: jsonURLs.specialitiesStream,
    //         data: {
    //         },
    //         dataType: 'json',
    //         success: function (data) {;
    //             (function renderData() {
    //                 specialitiesNames = Object.keys(data.specialities);
    //                 specialitiesValues = Object.values(data.specialities);
    //             })(data);
    //         }
    //     });
    // }

    $.ajax({
        type: 'GET',
        url: jsonURLs.cities,
        data: {
        },
        dataType: 'json',
        success: function (data) {;
            (function renderData() {
                citiesNames = Object.keys(data.cities);
                citiesValues = Object.values(data.cities);
            })(data);
        }
    });
    $.ajax({
        type: 'GET',
        url: jsonURLs.universities,
        data: {
        },
        dataType: 'json',
        success: function (data) {;
            (function renderData() {
                universitiesNames = Object.keys(data.universities);
                universitiesValues = Object.values(data.universities);
            })(data);
        }
    });
    $.ajax({
        type: 'GET',
        url: jsonURLs.specialities,
        data: {
        },
        dataType: 'json',
        success: function (data) {;
            (function renderData() {
                specialitiesNames = Object.keys(data.specialities);
                specialitiesValues = Object.values(data.specialities);
            })(data);
        }
    });
    $.ajax({
        type: 'GET',
        url: jsonURLs.branchesMain,
        data: {
        },
        dataType: 'json',
        success: function (data) {;
            (function renderData() {
                branchesMainNames = Object.keys(data.branchesMain);
                branchesMainValues = Object.values(data.branchesMain);
            })(data);
        }
    });
    $.ajax({
        type: 'GET',
        url: jsonURLs.branchesSecondary,
        data: {
        },
        dataType: 'json',
        success: function (data) {;
            (function renderData() {
                branchesSecondaryNames = Object.keys(data.branchesSecondary);
                branchesSecondaryValues = Object.values(data.branchesSecondary);
            })(data);
        }
    });

    setTimeout(function(){ renderCharts(); }, 300);
}

   // cities

function renderCharts(){
    var ctx = $("#cities");

    var citiesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: citiesNames,
            datasets: [{
                label: '# of Votes',
                data: citiesValues,
                backgroundColor: [
                    '#004C97',
                    '#0085CA',
                    '#00AAE2',
                    '#3CBEE9',
                    '#C4C9CD'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                backgroundColor: '#FFF',
                bodyFontColor: '#00aae2',
                bodyFontSize: 12,
                bodyFontFamily: 'Gotham-bold',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                displayColors: false
            },
            legend: {
                responsive: true,
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#2b2b2b',
                    fontSize: 12,
                    padding: 10,
                    usePointStyle: true
                }
            }
        }
    });
     // universities
   var ctx2 = $("#univer");

   var univerDoughnutChart = new Chart(ctx2, {
       type: 'doughnut',
       data: {
           labels: universitiesNames,
           datasets: [{
               label: '# of Votes',
               data: universitiesValues,
               backgroundColor: [
                   '#004C97',
                   '#0085CA',
                   '#00AAE2',
                   '#3CBEE9',
                   '#C4C9CD'
               ],
               borderWidth: 0
           }]
       },
       options: {
           cutoutPercentage: 75,
           tooltips: {
               backgroundColor: '#FFF',
               bodyFontColor: '#00aae2',
               bodyFontSize: 12,
               bodyFontFamily: 'Gotham-bold',
               borderColor: 'rgba(0, 0, 0, 0.2)',
               borderWidth: 1,
               displayColors: false
           },
           legend: {
               responsive: true,
               display: true,
               position: 'right',
               labels: {
                   fontColor: '#2b2b2b',
                   fontSize: 12,
                   // fontFamily: 'Gotham Book',
                   padding: 10,
                   usePointStyle: true
               }
           }
       }
   });

   // branches 

   var ctx3 = $("#branches");

   var branchesChart = new Chart(ctx3, {
       type: 'doughnut',
       data: {
           labels: specialitiesNames,
           datasets: [{
               label: '# of Votes',
               data: specialitiesValues,
               backgroundColor: [
                   '#004C97',
                   '#0085CA',
                   '#00AAE2',
                   '#3CBEE9',
                   '#C4C9CD'
               ],
               borderWidth: 0
           }]
       },
       options: {
           cutoutPercentage: 75,
           tooltips: {
               backgroundColor: '#FFF',
               bodyFontColor: '#00aae2',
               bodyFontSize: 12,
               bodyFontFamily: 'Gotham-bold',
               borderColor: 'rgba(0, 0, 0, 0.2)',
               borderWidth: 1,
               displayColors: false
           },
           legend: {
               responsive: true,
               display: true,
               position: 'right',
               labels: {
                   fontColor: '#2b2b2b',
                   fontSize: 12,
                   padding: 10,
                   usePointStyle: true
               }
           }
       }
   });
   // main-stream

   var ctx4 = $("#main-stream");

   var mainChart = new Chart(ctx4, {
       type: 'doughnut',
       data: {
           labels: branchesMainNames,
           datasets: [{
               label: '# of Votes',
               data: branchesMainValues,
               backgroundColor: [
                   '#004C97',
                   '#0085CA',
                   '#00AAE2',
                   '#3CBEE9',
                   '#EF6530',
                   '#F5913B',
                   '#009639',
                   '#78BE20',
                   '#FFCC3D',
                   '#E72E36',
                   '#C4C9CD'
               ],
               borderWidth: 0
           }]
       },
       options: {
           cutoutPercentage: 75,
           tooltips: {
               backgroundColor: '#FFF',
               bodyFontColor: '#00aae2',
               bodyFontSize: 12,
               bodyFontFamily: 'Gotham-bold',
               borderColor: 'rgba(0, 0, 0, 0.2)',
               borderWidth: 1,
               displayColors: false
           },
           legend: {
               responsive: true,
               display: true,
               position: 'right',
               labels: {
                   fontColor: '#2b2b2b',
                   fontSize: 12,
                   padding: 10,
                   usePointStyle: true
               }
           }
       }
   });

   //secondary stream
   
   var ctx5 = $("#secondary-stream");

   var secondaryChart = new Chart(ctx5, {
       type: 'doughnut',
       data: {
           labels: branchesSecondaryNames,
           datasets: [{
               label: '# of Votes',
               data: branchesSecondaryValues,
               backgroundColor: [
                   '#004C97',
                   '#0085CA',
                   '#00AAE2',
                   '#3CBEE9',
                   '#EF6530',
                   '#F5913B',
                   '#009639',
                   '#78BE20',
                   '#FFCC3D',
                   '#E72E36',
                   '#C4C9CD'
               ],
               borderWidth: 0
           }]
       },
       options: {
           cutoutPercentage: 75,
           tooltips: {
               backgroundColor: '#FFF',
               bodyFontColor: '#00aae2',
               bodyFontSize: 12,
               bodyFontFamily: 'Gotham-bold',
               borderColor: 'rgba(0, 0, 0, 0.2)',
               borderWidth: 1,
               displayColors: false
           },
           legend: {
               responsive: true,
               display: true,
               position: 'right',
               labels: {
                   fontColor: '#2b2b2b',
                   fontSize: 12,
                   padding: 10,
                   usePointStyle: true
               }
           }
       }
   });
}
   
