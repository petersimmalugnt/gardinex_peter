'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Img from "./components/Img/Img";
import Container from "./components/Container/Container";
import Section from './components/Section/Section';
import Button from './components/Button/Button';

export default function Home() {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <>
      <ReactLenis root>

        <Img
          src="/assets/2x3/image 64.png"
          aspectRatio="3/2"
          minVh={true}
          marginTop='none'
        />

        <Section layout={1}>
          <div className='w-full bg-red-300'>
            <Button href='/' variant='plain'>Add to cart</Button>
            <p>Nam venenatis vitae nulla sit amet ultrices. Etiam ut massa fringilla, elementum purus non, mollis mauris. Vestibulum vehicula neque eu tortor vestibulum lobortis. Phasellus vel ex id sapien condimentum tristique. Pellentesque at posuere elit. Ut ipsum leo, tincidunt ac tellus eget, placerat pharetra tortor.</p></div>
          <div className='w-full min-h-4xl bg-red-300'>2</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
        </Section>

        <Section layout={2}>
          <div className='w-full bg-red-300 text-center text-md'><p>Nam venenatis vitae nulla sit amet ultrices. Etiam ut massa fringilla, elementum purus non, mollis mauris. Vestibulum vehicula neque eu tortor vestibulum lobortis. Phasellus vel ex id sapien condimentum tristique. Pellentesque at posuere elit. Ut ipsum leo, tincidunt ac tellus eget, placerat pharetra tortor.</p></div>
        </Section>

        <Img
          src="/assets/2x3/image 64.png"
          aspectRatio="3/2"
          marginTop='none'
        />

        <Section layout={3}>
          <div className='w-full bg-red-300 text-center text-md'><p>Nam venenatis vitae nulla sit amet ultrices. Etiam ut massa fringilla, elementum purus non, mollis mauris. Vestibulum vehicula neque eu tortor vestibulum lobortis. Phasellus vel ex id sapien condimentum tristique. Pellentesque at posuere elit. Ut ipsum leo, tincidunt ac tellus eget, placerat pharetra tortor.</p></div>
        </Section>

        <Img
          src="/assets/2x3/image 64.png"
          aspectRatio="3/2"
          marginTop='none'
        />

        <Section layout={4}>
          <div className='w-full min-h-4xl bg-red-300'>2</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
          <div className='w-full min-h-4xl bg-red-300'>3</div>
        </Section>

        <Img
          src="/assets/2x3/image 64.png"
          aspectRatio="3/2"
          marginTop='none'
        />

        <Section layout={5}>
          <Img
            src="/assets/2x3/image 64.png"
            aspectRatio="3/2"
            minVh={false}
            sticky={true}
            width="md"
            place="top center"
            offset="right"
          />
          <Img
            src="/assets/3x4/image 28.png"
          />
        </Section>

        <Section layout={5}>
          <Img src="/assets/2x3/image 64.png" aspectRatio="3/2" />
        </Section>

        <Section layout={5}>
          <Img
            src="/assets/3x4/image 4.png"
            aspectRatio="3/4"
            width="xl"
            place="top right"
            offset=""
            span={7}
          />
          <Container place="right" offset="left" width="lg" span={5} sticky={true}>
            <h3 className="text-md uppercase">Lorem ipsum dolor sit amet</h3><br/>
            <p>
              Quisque eleifend, sapien nec facilisis vestibulum, turpis ante dictum erat, non imperdiet ligula velit in nulla. Nam aliquam, risus a volutpat ullamcorper, lectus tellus congue quam, vitae malesuada est libero sed eros. Morbi ornare, ante vel auctor hendrerit, tortor elit pretium orci, vulputate convallis lorem nisl in est. Nam sit amet lacus nibh. Nam nec massa imperdiet, auctor tortor ut, dapibus dolor. Maecenas rhoncus erat ac diam fringilla pulvinar. Donec pulvinar nunc vitae neque tincidunt maximus. Vestibulum pretium vel nulla id mattis. Sed cursus bibendum elit.
              <br /><br />
              Sed tempus neque nec sapien venenatis gravida. Vestibulum id elementum arcu, id sollicitudin est. Sed sed consectetur elit. Nulla venenatis pellentesque diam, interdum maximus tellus condimentum ac. Phasellus ac pharetra nisi, nec interdum justo. Vivamus quis volutpat orci. Cras et tincidunt augue.
              <br /><br />
              Phasellus nisi arcu, consequat ut viverra ut, viverra facilisis risus. Cras imperdiet leo eu mollis rhoncus. Duis ultricies, urna eget maximus tempus, neque ante tincidunt lorem, ut congue turpis neque in eros. Duis rhoncus libero sit amet dignissim consectetur. Vestibulum dui quam, facilisis feugiat tincidunt eget, facilisis nec arcu. Integer tristique posuere sem, a aliquet est consectetur sed. Integer bibendum cursus sapien, in malesuada odio. Morbi nisl magna, sagittis id nisi et, gravida elementum magna. Phasellus vestibulum orci in posuere suscipit. Fusce elementum felis nec ex facilisis tincidunt.
            </p>
          </Container>
        </Section>

        <Section layout={5}>
          <Img
            src="/assets/3x4/image 4.png"
            aspectRatio="3/4"
            sticky={true}
            width="lg"
            place="top center"
            offset="left right"
          />
          <Container place="center" width="xl" span={2} offset="" marginTop="none" marginBottom="none" mobileFullWidth={true} >
            <Img src="/assets/3x4/image 2.png" aspectRatio="3/4" marginBottom='none' />
            <Container place='center' width='lg' marginTop='xs'>
              <p className='text-xs text-center'>När man sedan stiger in i vardagsrummet möts man av en fantastisk kakelugn som verkligen förhöjer den mysiga atmosfären. </p>
            </Container>
          </Container>
        </Section>

        <Section layout={5}>
          <Img
            src="/assets/3x4/image 2.png"
            aspectRatio="3/4"
            width="lg"
            place="right"
            offset=""
          />
          <Container place="" width="" span={1} offset="left right" mobileFullWidth={true}>
            <p>
              Den eleganta fiskbensparketten genom hela lägenheten skapar en tidlös känsla i hemmet. När man sedan stiger in i vardagsrummet möts man av en fantastisk kakelugn som verkligen förhöjer den mysiga atmosfären. Här kan man sitta och njuta av både dess värme och skönhet. I mitten av rummet finner man ett marmorbord med klassiska inredningsdetalj som fångar ens uppmärksamhet - ett schackbräde och en flowerpot lampa i en greige nyans.
            </p>
          </Container>
        </Section>

      </ReactLenis>
    </>
  );
}
