PageContentSection example:

```jsx static
// Red w/ title, subtitle, no CTAButton
<PageContentSection 
  id="1"
  alignContent="left"
  backgroundColor="#fafafa"
  imageUrl="https://google.com"
  sectionColor="primary"
  title="Top text"
  titleColor="primary"
  subtitle="Bottom text"
/>

// Blue w/ headline, title, CTAButton
<PageContentSection
  id="2"
  alignContent="right"
  backgroundColor="#fafafa"
  imageUrl="https://google.com"
  sectionColor="secondary"
  title="Top text"
  titleColor="secondary"
  ctaButton
  ctaButtonText="Click me"
  ctaOnClick={() => console.log('Click!')}
  headline="Headline text"
/>
```
