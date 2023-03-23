"use strict";

function generate_data() {
    var url = location.href;
    var nn = document.getElementById("nickname").value;
    document.getElementById("preview_nickname").innerHTML = nn;
    var fn = document.getElementById("full_name").value;
    document.getElementById("preview_full_name").innerHTML = fn;
    var jt = document.getElementById("position").value;
    document.getElementById("preview_job_title").innerHTML = jt;
    // var dp = document.getElementById("department").value;
    // document.getElementById("preview_department").innerHTML = dp;
    var ea = document.getElementById("email_address").value;
    document.getElementById("preview_email_address").innerHTML = ea;
    document.getElementById("preview_email_address").href = "mailto:" + ea;
    var cp = document.getElementById("tel_number").value;
    document.getElementById("preview_company_phone").innerHTML = cp;
    document.getElementById("preview_company_phone").href = "tel:" + cp;
    var cm = document.getElementById("mobile_number").value;
    document.getElementById("preview_company_mobile").innerHTML = cm;
    document.getElementById("preview_company_mobile").href = "tel:" + cm;

    // if (document.getElementById("mobile_number").value == "" || document.getElementById("mobile_number").value == "") {
    //     document.getElementById("divider").innerHTML = "";
    // }

    var ca = document.getElementById("company_address").value;
    var ca1 = document.getElementById("company_address_2").value;
    document.getElementById("preview_company_address").innerHTML = ca + ", <br>" + ca1;

    var bo = document.querySelector('input[name="badge_option"]:checked');
    if (bo.value == "1") {
        document.getElementById("badge_img").innerHTML = "";
    } else if (bo.value == "2") {
        document.getElementById("badge_img").innerHTML = "";
        document.getElementById("badge_img").innerHTML =
            " <img  style=' text-align: left !important; height: auto; width: 70px; ' src='https://ipsystems-ph.github.io/email-signature-generator/assets/media/sales-badge-70w.png' sizes='21' /> <img  style=' text-align: left !important; height: auto; width: 70px; margin-left: 14px !important; ' src='https://ipsystems-ph.github.io/email-signature-generator/assets/media/sales-badge-2-70w.png' sizes='21' />";
    } else if (bo.value == "3") {
        document.getElementById("badge_img").innerHTML = "";
        document.getElementById("badge_img").innerHTML =
            " <img  style=' text-align: left !important; height: auto; width: 70px; ' src='https://ipsystems-ph.github.io/email-signature-generator/assets/media/technical-badge-70w.png' sizes='21' /> <img  style=' text-align: left !important; height: auto; width: 70px; margin-left: 14px !important; ' src='https://ipsystems-ph.github.io/email-signature-generator/assets/media/technical-badge-2-70w.png' sizes='21' />";
    }

    var mo = document.querySelector('input[name="mobile_option"]:checked');
    if (mo.value == "1") {
        document.getElementById("mobile_option_preview").innerHTML =
            "Mobile/Viber:";
    } else if (mo.value == "2") {
        document.getElementById("mobile_option_preview").innerHTML =
            "Mobile:";

    }
    var bi = document.getElementById("promotional_banner_image_link").value;
    document.getElementById("preview_promo_banner_img").src = bi;
    document.getElementById("button_preview").removeAttribute("hidden");

}
var CreateEmailSig = function() {
    var e, t, i, o, a, r, s = [];
    return {
        init: function() {
            (e = document.querySelector("#kt_modal_create_account")) && new bootstrap.Modal(e),
                (t = document.querySelector("#kt_create_account_stepper")) && (i = t.querySelector("#kt_create_account_form"),
                    o = t.querySelector('[data-kt-stepper-action="submit"]'),
                    a = t.querySelector('[data-kt-stepper-action="next"]'),
                    (r = new KTStepper(t)).on("kt.stepper.changed", (function(e) {
                        4 === r.getCurrentStepIndex() ? (o.classList.remove("d-none"),
                            o.classList.add("d-inline-block"),
                            a.classList.add("d-none")) : 5 === r.getCurrentStepIndex() ? (o.classList.add("d-none"),
                            a.classList.add("d-none")) : (o.classList.remove("d-inline-block"),
                            o.classList.remove("d-none"),
                            a.classList.remove("d-none"))
                    })),
                    r.on("kt.stepper.next", (function(e) {
                        var t = s[e.getCurrentStepIndex() - 1];
                        t ? t.validate().then((function(t) {
                            "Valid" == t ? (e.goNext(),
                                KTUtil.scrollTop()) : Swal.fire({
                                text: "Sorry, looks like there are some errors detected, please try again.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-light"
                                }
                            }).then((function() {
                                KTUtil.scrollTop()
                            }))
                        })) : (e.goNext(),
                            KTUtil.scrollTop())
                    })),
                    r.on("kt.stepper.previous", (function(e) {
                        e.goPrevious(),
                            KTUtil.scrollTop()
                    })),
                    s.push(FormValidation.formValidation(i, {
                        fields: {
                            nickname: {
                                validators: {
                                    notEmpty: {
                                        message: "Nickname is required"
                                    }
                                }
                            },
                            full_name: {
                                validators: {
                                    notEmpty: {
                                        message: "Full Name is required"
                                    }
                                }
                            },
                            position: {
                                validators: {
                                    notEmpty: {
                                        message: "Position is required"
                                    }
                                }
                            },
                            email_address: {
                                validators: {
                                    notEmpty: {
                                        message: "Email Address is required"
                                    }
                                }
                            },
                            badge_option: {
                                validators: {
                                    notEmpty: {
                                        message: "Badge Option is required"
                                    }
                                }
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger,
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: ""
                            })
                        }
                    })),
                    s.push(FormValidation.formValidation(i, {
                        fields: {
                            mobile_number: {
                                validators: {
                                    notEmpty: {
                                        message: "Mobile number is required"
                                    }
                                }
                            },
                            mobile_option: {
                                validators: {
                                    notEmpty: {
                                        message: "Mobile Option is required"
                                    }
                                }
                            },
                            phone_number: {
                                validators: {
                                    notEmpty: {
                                        message: "Phone number is required"
                                    }
                                }
                            },
                            company_address: {
                                validators: {
                                    notEmpty: {
                                        message: "Company address is required"
                                    }
                                }
                            },
                            company_address_2: {
                                validators: {
                                    notEmpty: {
                                        message: "Company address 1 is required"
                                    }
                                }
                            }
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger,
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: ""
                            })
                        }
                    })),
                    s.push(FormValidation.formValidation(i, {
                        fields: {
                            promotional_banner_image_link: {
                                validators: {
                                    notEmpty: {
                                        message: "Promotional Banner Image link is required"
                                    }
                                }
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger,
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: ""
                            })
                        }
                    })),
                    s.push(FormValidation.formValidation(i, {
                        fields: {

                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger,
                            bootstrap: new FormValidation.plugins.Bootstrap5({
                                rowSelector: ".fv-row",
                                eleInvalidClass: "",
                                eleValidClass: ""
                            })
                        }
                    })),
                    o.addEventListener("click", (function(e) {
                        s[3].validate().then((function(t) {
                            "Valid" == t ? (e.preventDefault(),
                                o.disabled = !0,
                                o.setAttribute("data-kt-indicator", "on"),
                                setTimeout((function() {
                                    generate_data();
                                    o.removeAttribute("data-kt-indicator"),
                                        o.disabled = !1,
                                        r.goNext()
                                }), 2e3)) : Swal.fire({
                                text: "Sorry, looks like there are some errors detected, please try again.",
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-light"
                                }
                            }).then((function() {

                                KTUtil.scrollTop()
                            }))
                        }))
                    })))
        }
    }
}();

KTUtil.onDOMContentLoaded((function() {
    CreateEmailSig.init()
        // KTModalShareEarn.init()
}));