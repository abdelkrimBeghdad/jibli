import React, { Component } from 'react';
import './Contact.css';
import { withTranslation } from 'react-i18next';

import { Trans } from 'react-i18next';


 class Footer extends Component {
  render() {
    const {t}= this.props
    return (
      <div className="ftr">

        <footer className="site-footer">

          <section style={{ backgroundColor: '#ffffff', paddingTop: '30px' }}>
            <div className="section-header">
              <h2 className="section-title">{t('Why should you choose us')}</h2>
              <span className="line"></span>
            </div>
            <div className="container my-4">
              <div className="row text-center">

                <div className="col-md-4 col-4 col-sm-4  mb-4">

                  <div className='im  bg-color-2 d-flex justify-content-center align-items-center mb-2'>
                    <img className=" bg-color-2" alt="100*100" src="carousel/diet(1).png" data-holder-rendered="true" />
                  </div>
                  <h3 className="heading">{t('Always Fresh')}</h3>
                  <span>{t('Product well package')}</span>
                </div>  <div className="col-md-4 col-4 col-sm-4 mb-4">

                  <div className='im  bg-color-3 d-flex justify-content-center align-items-center mb-2'>
                    <img className="bg-color-3" alt="100*100" src="carousel/quality(1).png" data-holder-rendered="true" />
                  </div>
                  <h3 className="heading">{t('Superior Quality')}</h3>
                  <span>{t('Quality Products')}</span>
                </div>

                <div className="col-md-4 col-4 col-xs-4 mb-4">
                  <div className='im  bg-color-4 d-flex justify-content-center align-items-center mb-2'>
                    <img className="bg-color-4" alt="100x100" src="carousel/customer-service(1).png"
                      data-holder-rendered="true" />
                  </div>
                  <h3 className="heading">{t('Support')}</h3>
                  <span>{t('Supportt')}</span>
                </div>


              </div>

            </div>
          </section>


          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text"><Trans>Copyright &copy; 2020 All Rights Reserved by</Trans>
          <a href="#" style={{color:'#38c172'}}> Beghdad Abdelkrim</a>
        </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }


}

export default withTranslation()(Footer)