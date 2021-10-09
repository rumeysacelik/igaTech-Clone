import React from "react";
import styled from "styled-components";
import sertifika from "../assets/sertifika1.jpg";
import ödül from "../assets/odul1.jpg";
import leed from "../assets/leed-gold.jpg";
import mapgif from "../assets/map.gif";
import fotoğraflar from "../assets/TERMINAL_DIS_9.jpg";


function NewSection() {
  return (
    <div>
      <div>
        <FlexDiv>
          <NewsSection>
            <NewsHeader>Haberler</NewsHeader>
            <Title style={{ marginLeft: "-180px" }}>Tümünü Gör</Title>
          </NewsSection>
          <FlexWrap>
            <NewsCard>
              <NewsExplain>
                <img src={sertifika} />
                <NewsDate>06 Temmuz 2021</NewsDate>
                İstanbul Havalimanı'nın "Havalimanı Sağlık Akreditasyonu"
                Sertifikası Yenilendi
              </NewsExplain>
            </NewsCard>

            <li ></li>

            <NewsCard>
              <NewsExplain>
                <img src={ödül} />
                <NewsDate>14 Haziran 2021</NewsDate>
                Müşteri Deneyimi Ödülleri'nden İstanbul Havalimanı'na Dört Ödül
              </NewsExplain>
            </NewsCard>

            <li></li>

            <NewsCard>
              <NewsExplain>
                <img src={leed} />
                <NewsDate>14 Haziran 2021</NewsDate>
                Ali Kuşçu Cami-i Şerifi Dünyanın İlk "LEED Altın Sertifikalı
                Camisi Oldu"
              </NewsExplain>
            </NewsCard>
          </FlexWrap>
        </FlexDiv>

        <PhotosSection>
          <PhotosHeader>Galeri</PhotosHeader>
          <Title>Tümünü Gör</Title>

          <div class="img-wrapper">
    <img class="extrem-height-image" src="http://placehold.it/400x600"/>
</div>

        </PhotosSection>
       
        <AviationSection>
        
          <Row>
            <Column>
<LargeTitle>
ASYA, AVRUPA VE ORTA DOĞU’NUN KESİŞTİĞİ NOKTADA ÖNEMLİ BİR MERKEZ
</LargeTitle>
<Short>
"Tüm fazları tamamlandığında İstanbul Havalimanı, yıllık 200 milyon yolcu kapasitesiyle 300’den fazla destinasyona uçuş imkanı sunacak."

</Short>



</Column>
</Row>
<img className="mapGif" src={mapgif}></img>

        </AviationSection>
<FlexDiv>
<FlexWrap>
<FooterSection>
<ColumnFooter style={{marginLeft:"110px"}}>
<İnner >
<FooterTitle>İGA Hakkında</FooterTitle>
<FooterItem>
Hakkımızda
</FooterItem>
<FooterItem>
  Biz Kimiz
</FooterItem>
<FooterItem>
  Marka Stratejisi
</FooterItem>
<FooterItem>
  Zaman Yolculuğu
</FooterItem>
<FooterItem>
Ortaklık Yapısı
</FooterItem>
<FooterItem>
  Sertifikalar ve Ödüller
</FooterItem>
<FooterItem>
  İş Sağlığı ve Güvenliği
</FooterItem>
<FooterItem>
  Politikalar
</FooterItem>
<FooterItem>
  Hayaldi Gerçek Oldu E-Kitap
</FooterItem>
<FooterItem>
  Birlikte Başardık E-Kitap
</FooterItem>
<FooterItem>
  Yönetim İşletim Planı 
</FooterItem>
<FooterItem>
KVKK Başvuru Formu 
</FooterItem>
<FooterItem>
Aydınlatma Metni
</FooterItem>
<FooterItem>
Bilgi Toplumu Hizmetleri
</FooterItem>




</İnner>
</ColumnFooter>

<ColumnFooter>
<İnner >
<FooterTitle>İstanbul Havalimanı</FooterTitle>
<FooterItem>
Gelen Uçuşlar
</FooterItem>
<FooterItem>
Giden Uçuşlar
</FooterItem>
<FooterItem>
Havalimanı Haritası
</FooterItem>
<FooterItem>
Havalimanı Oteli
</FooterItem>
<FooterItem>
Toplu Taşıma
</FooterItem>
<FooterItem>
Havalimanı Otopark
</FooterItem>
</İnner>
</ColumnFooter>

<ColumnFooter>
<İnner>
<FooterTitle>Sürdürülebilirlik</FooterTitle>
<FooterItem>
Sürdürülebilirlik
</FooterItem>
<FooterItem>
Sosyal Sorumluluk Projeleri
</FooterItem>

</İnner>
</ColumnFooter>

<ColumnFooter>
<İnner>
<FooterTitle>Basın Merkezi</FooterTitle>
<FooterItem>
Basın Odası
</FooterItem>
<FooterItem>
Multimedya
</FooterItem>

</İnner>
</ColumnFooter>

<ColumnFooter>
<İnner>
<FooterTitle>İnsan Kaynakları</FooterTitle>
<FooterItem>
İlkelerimiz
</FooterItem>
<FooterItem>
İK Politikamız
</FooterItem>
<FooterItem>
Kariyer Fırsatları
</FooterItem>
<FooterItem>
iGA Akademi
</FooterItem>

</İnner>
</ColumnFooter>

</FooterSection>
</FlexWrap>
</FlexDiv>
      </div>
    </div>

    

  );
}

const FooterItem  = styled.div`
color: #fff;
margin-left:-100px;
display: flex;
flex-direction: column;
text-align: left;
margin: 10px;

`;

const Photos  = styled.div`
margin-left:-100px;
display: flex;
flex-direction: column;
text-align: left;
margin: 10px;
width:330px;
height:330px;

`;



const FooterTitle  = styled.div`
color: #fff;
font-size: 20px;
font-weight: 600;
line-height: 32px;
margin-left:10px;
`;

const İnner  = styled.div`
padding: 70px 0 70px 15px;
`;

const ColumnFooter  = styled.div`
float: left;
width: 17%;
position: relative;
min-height: 1px;

display: flex;

flex:1;
text-align: left;

margin: 10px;
`;

const FooterSection  = styled.div`
position: relative;
z-index: 2;
background-image: none!important;
background-color: #1fbed4;
width:1519px;
  height:741px;
`;

const Short  = styled.div`
margin-bottom: 14px;
font-weight: 300;
font-size: 18px;
line-height: 30px;
color: #3c4151;
margin: 0 0 10px;
text-align: left;
`;

const Column  = styled.div`
float: left;
  width: 40%;
  margin-left:140px;
  margin-top:100px;
`;

const Row = styled.div`
content: "";
display: table;
clear: both;
`;

const LargeTitle = styled.div`
font-size: 50px;
margin-bottom: 14px;
font-weight: 300;
color: #00bed6;
    margin: 26px 0 0;
    text-align: left;
`;

const AviationSection = styled.div`
  background-color: #f7f7f7;
  position: relative;
  display: block;
  outline: 0!important;
  width:1519px;
  height:596px;
`;

const Title = styled.div`
  padding-top: 18px;
  color: #000 !important;
  font-size: 14px;
  font-weight: 800;
  opacity: 0.35;
  margin-left: -120px;
  margin-top: 240px;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewsDate = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #d0d5d8;
  padding: 0 0 10px 0;
  line-height: 22px;
`;

const NewsExplain = styled.div`
  text-align: left;
  color: black;
  margin-top: 150px;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  color: #3c4151;
`;

const NewsHeader = styled.div`
  text-align: left;
  font-size: 3em;
  margin-top: 180px;
  color: #fff;
`;

const PhotosHeader = styled.div`
  text-align: left;
  font-size: 3em;
  margin-top: 160px;
  color: #fff;
  color: ${(props) => (props.primary ? "black" : "white")};
`;

const NewsCard = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 400px;
  background-color: transparent;
  border-radius: 0px;
  padding: 0px;
  margin: 0px;
  margin-top: -690px;
  left: 460px;
  
`;

const FlexDiv = styled.div`
  flex: ${(props) => (props.flex && `${props.flex}`) || "1"};
`;

const NewsSection = styled.div`
  display: flex;
  padding: 50px;
  color: white;
  width: 200px;
  height: 300px;
  margin-left: 140px;
  margin-bottom: 140px;
  @media (max-width: 500px) {
  }
  background: #00bed6;
  
`;

const PhotosSection = styled.div`
  display: flex;
  padding: 50px;
  color: white;
  width: 200px;
  height: 250px;
  margin-left: 140px;
  margin-bottom: 140px;
  @media (max-width: 500px) {
  }
  background: #00bed6;
`;

export default NewSection;
