import React from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import searchIcon from "../assets/img/search.svg";
import vacancyImg from "../assets/img/vacancy.png";
import InputMask from "react-input-mask";

const Careers = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <meta name="author" content="Javohir Xasanov" />
        <title>Careers</title>
      </Head>
      <main className="careers">
        <div className="container">
          <section className="careers-job">
            <h1 className="careers-job_title">Ready for your dream job?</h1>
            <p className="careers-job_txt">
              We have tons of open positions at the moment — match your
              specialty to one of our many locations.
            </p>
            <div className="careers-job_selection">
              <form
                className="careers-job_selection-form row"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="careers-job_selection-form_selectbox col-12 col-lg-5">
                  <label>All specialties</label>
                  <select
                    className="careers-job_selection-form_selectbox-select"
                    {...register("specialities")}
                  >
                    <option value="Any specialties">Any specialties</option>
                    <option value="Web">Web Design</option>
                    <option value="Front">Front-End</option>
                    <option value="Back">Back-End</option>
                    <option value="Full">Full-Stack</option>
                    <option value="Graphic">Graphic Design</option>
                  </select>
                </div>
                <div className="careers-job_selection-form_selectbox col-12 col-lg-5">
                  <label>Any locations</label>
                  <select
                    className="careers-job_selection-form_selectbox-select"
                    {...register("locations")}
                  >
                    <option value="All Locations">All locations</option>
                    <option value="Tashkent">Tashkent</option>
                    <option value="Bukhara">Bukhara</option>
                    <option value="Samarqand">Samarqand</option>
                    <option value="Navoiy">Navoiy</option>
                    <option value="Andijon">Andijon</option>
                  </select>
                </div>
                <button
                  type="sumbit"
                  className="careers-job_selection-form_btn col-12 col-md-1"
                >
                  <Image width={35} height={35} src={searchIcon} alt="search" />
                </button>
              </form>
            </div>
          </section>
          <section className="careers-vacancy">
            <div className="careers-vacancy_content">
              <h2 className="careers-vacancy_content-title">
                Don’t see a vacancy that fits you?
              </h2>
              <div className="careers-vacancy_content-box row">
                <div className="careers-vacancy_content-box_left col-12 col-sm-6">
                  <Image src={vacancyImg} alt="vacancy" />
                </div>
                <div className="careers-vacancy_content-box_right col-12 col-sm-6">
                  <p className="careers-vacancy_content-box_right-txt">
                    Don’t worry — we’ll try to find a project exactly for you.
                    Please leave your contact details, and we’ll get in touch as
                    soon as we have a good match!
                  </p>
                  <button className="careers-vacancy_content-box_right-btn">
                    Send CV
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="careers-cv">
            <h2 className="careers-cv_title">Send your CV</h2>
            <div className="careers-cv_content">
              <form
                className="careers-cv_content-form"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="careers-cv_content-form_content">
                  <div className="careers-cv_content-box row">
                    <div className="careers-cv_content-form_box-inner col-12 col-sm-6">
                      <input
                        type="text"
                        className="careers-cv_content-form_box-inner_input"
                        placeholder="First name*"
                        autoComplete="off"
                        {...register("firstname")}
                        name="firstname"
                      />
                    </div>
                    <div className="careers-cv_content-form_box-inner col-12 col-sm-6">
                      <input
                        type="text"
                        className="careers-cv_content-form_box-inner_input"
                        placeholder="Last name*"
                        autoComplete="off"
                        {...register("lastname")}
                        name="lastname"
                      />
                    </div>
                  </div>
                  <div className="careers-cv_content-box row">
                    <div className="careers-cv_content-form_box-inner col-12 col-sm-6">
                      <input
                        type="email"
                        placeholder="Email*"
                        className="careers-cv_content-form_box-inner_input"
                        autoComplete="off"
                        {...register("email")}
                        name="email"
                      />
                    </div>
                    <div className="careers-cv_content-form_box-inner col-12 col-sm-6">
                      <input
                        type="tel"
                        placeholder="Phone*"
                        className="careers-cv_content-form_box-inner_input"
                        autoComplete="off"
                        {...register("tel")}
                        name="tel"
                        required
                        mask={"+\\9\\9\\8\\ 99 999 99 99"}
                      />
                    </div>
                  </div>
                  <div className="careers-cv_content-form_content-message col-12">
                    <textarea
                      className="careers-cv_content-form_content-message_area"
                      {...register("message")}
                      name="message"
                      id="message"
                      placeholder="About yourself*"
                    ></textarea>
                  </div>
                </div>
                <div className="careers-cv_content-form_sendblock">
                  <div className="careers-cv_content-form_send row">
                    <div className="careers-cv_content-form_send-box_left col-12 col-sm-8">
                      <p>* Fields marked with * are required</p>
                      <div className="careers-cv_content-form_send-box_left-send">
                        <input
                          type="file"
                          autoComplete="off"
                          {...register("file")}
                          name="file"
                        />
                        <span>(max file size 5MB; pdf, doc, docx) </span>
                      </div>
                    </div>
                    <div className="careers-cv_content-form_send-box_right col-12 col-sm-4">
                      <button
                        type="submit"
                        className="careers-cv_content-form_send-box_right-btn"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        <section className=" container">
          <p className="">
            {" "}
            <iframe
              className="careers-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.25541040002!2d71.78278911491667!3d40.38103156573462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83b8ca19ff63%3A0x8280fefda94b4cea!2sWorld%20Glamour%20Tour!5e0!3m2!1suz!2s!4v1658166489264!5m2!1suz!2s"
              width="1350"
              height="450"
              style={{ border: 0 }}
              //   allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </section>
      </main>
    </>
  );
};

export default Careers;
