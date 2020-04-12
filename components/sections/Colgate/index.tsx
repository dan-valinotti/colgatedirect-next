import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import StarRatings from 'react-star-ratings';
import AddToCart from '../AddToCart';

type Props = {
  starRating: number;
  bestTPayment: number;
  oneTPayment: number;
  ratingEditable: boolean;
};

const Colgate: FunctionComponent<Props> = ({
  starRating, bestTPayment, oneTPayment, ratingEditable
}: Props) => {
  const [isDesc, setIsDesc] = React.useState<boolean>(true);
  const [isIngre, setIsIngr] = React.useState<boolean>(false);
  const showDesc = () => {
    setIsDesc(true);
    setIsIngr(false);
  };
  const showIngr = () => {
    setIsDesc(false);
    setIsIngr(true);
  }
  return(
      <Styled.ColgateBody>
        <h1 style={Styled.h1Styles}>Colgate ® Optic White Advanced LED Whitening</h1>
        <br/>
        <Styled.DescriptionWrap>
          <Styled.TitleWrap>
            <h2 style={Styled.h2Styles}>LED Teeth Whitening Device &amp; 10-Day Treatment</h2>
            <Styled.PwrSnippets>
              <Styled.PrReviewSnippet>
                <StarRatings editable={ratingEditable} name='rating' rating={4.25} starRatedColor="#d9291c" starDimension='20px' starSpacing='3px'/>
                <br/>
                <a href="#">Write a Review</a>
              </Styled.PrReviewSnippet>
              <Styled.WrapperAfterPay>
                <Styled.Left1>
                  <p>
                    <span></span>
                    <span>
                      <Styled.AfterPayImg item src={"https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png"}></Styled.AfterPayImg>
                    </span>
                  </p>
                  <a href="https://www.afterpay.com/purchase-payment-agreement">ⓘ</a>
                </Styled.Left1>
              </Styled.WrapperAfterPay>
            </Styled.PwrSnippets>
            <Styled.WrapperDescription>
              <Styled.Left2>
                <Styled.Description>
                  <Styled.Tabs>
                    <Styled.DescriptionP href="#/" id="pdp-button-tab1" onClick={showDesc}>Description</Styled.DescriptionP>
                    <span>|</span>
                    <Styled.IngredientsNP href="#/" id="pdp-button-tab2" onClick={showIngr}>Ingredients</Styled.IngredientsNP>
                  </Styled.Tabs>
                  <Styled.Cont>
                    <div>
                      { isDesc && (
                      <div>
                        <p>Just like a professional whitening treatment, in the comfort of your own home! Our enamel safe and clinically proven teeth whitening device and 10 day treatment delivers 6 shades whiter teeth. The effective blue light devices works to activate and lift stains faster. All hands free and just 10 minutes a day!&nbsp;</p>
                      </div>)
                      }
                      {isIngre && (
                      <div>
                        <p>9% hydrogen peroxide whitening serum vials</p>
                        <p><strong>Ingredients:</strong> water, glycerin, hydrogen peroxide, carbomer, sodium hydroxide, sodium saccharin</p>
                        <p>0.09 FL OZ (2.8 mL) per vial</p>
                      </div>)}
                    </div>
                </Styled.Cont>
                </Styled.Description>
              </Styled.Left2>
              <Styled.Right2>
                <AddToCart bestTPayment={bestTPayment} oneTPayment={oneTPayment}>
                </AddToCart>
              </Styled.Right2>
            </Styled.WrapperDescription>      
          </Styled.TitleWrap>
        </Styled.DescriptionWrap>
      </Styled.ColgateBody>
    );
  }

export default Colgate;
