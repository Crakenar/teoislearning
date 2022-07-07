<template>
  <div class="container">
    <div class="main-timeline">
      <div v-for="(exp, index) in expList" :key="index" class="timeline">
        <div class="date-content">
          <div class="date-outer">
            <span class="date">
              <span class="month">{{ exp.duration }}</span>
              <span class="year">{{ exp.year }}</span>
            </span>
          </div>
        </div>
        <a :data-bs-target="'#'+exp.company" class="timeline-content" data-bs-toggle="modal">
          <h5 class="title">{{ exp.name }}</h5>
          <img :src="exp.imageUrl" class="img-timeline" alt="">
        </a>
        <!--MODAL-->
        <div :id="exp.company" :aria-labelledby="exp.company"
             aria-hidden="true" class="modal fade" tabindex="-1">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 id="exampleModalLabel" class="modal-title">{{ exp.name }}</h5>
                <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
              </div>
              <div class="modal-body">
                <div>
                  <MarkdownHTML v-if="$i18n.locale === 'fr'" :urlMD="exp.descriptionFR"/>
                  <MarkdownHTML v-else :urlMD="exp.descriptionEN"/>
                </div>
                <div>
                  <img :alt="'image de ' + exp.company" :src="exp.imageUrl" class="center-img img-modal">
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Experience} from "@/Model/Experience";
import MarkdownHTML from "@/components/MarkdownHTML";

//Can simplify the object, we do not need 2 description => use $i18n.locale === ('fr' | 'en')
//need require bc I cannot import using a variable in MarkdownHTML
const expList = [
  new Experience(
      'Developpeur',
      require('../assets/markdown/Experiences/fr/AM-Creations.md'),
      require('../assets/markdown/Experiences/en/AM-Creations.md'),
      '5 months',
      '2022',
      'AM-Creations',
      '02 February, 2022',
      require('../assets/img/Experiences/amcreations.png')
  ),
  new Experience(
      'Analyste Developpeur',
      require('../assets/markdown/Experiences/fr/Axopen.md'),
      require('../assets/markdown/Experiences/en/Axopen.md'),
      '4 months',
      '2021 - 2022',
      'Axopen',
      '04 October, 2021',
      require('../assets/img/Experiences/axopen.png')
  ),
  new Experience(
      'Developpeur Full-Stack',
      require('../assets/markdown/Experiences/fr/Trixell.md'),
      require('../assets/markdown/Experiences/en/Trixell.md'),
      '1 year',
      '2020 - 2021',
      'Trixell',
      '07 October, 2020',
      require('../assets/img/Experiences/trixell.png')
  ),
  new Experience(
      'Stage Developpeur',
      require('../assets/markdown/Experiences/fr/Axopen.md'),
      require('../assets/markdown/Experiences/fr/Axopen.md'),
      '4.5 months',
      '2020',
      'Mobiteach',
      '14 Avril 2020',
      require('../assets/img/Experiences/mobiteach.jpg')
  )
]
</script>

<style lang="scss" scoped>
.content-center {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.img-modal {
  width: 200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.img-timeline {
  width: 120px;
}


a, a:hover, a:visited, a:focus, a:active {
  text-decoration: none;
  color: inherit;
  outline: 0;
  cursor: pointer;
}


.main-timeline {
  margin-top: 5%;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background: #c6c6c6;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0
  }
}

.main-timeline .timeline {
  margin-bottom: 40px;
  position: relative;

  &:after {
    content: "";
    display: block;
    clear: both
  }
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;

  &::before {
    content: "";
    width: 45%;
    height: 2px;
    background: #c6c6c6;
    margin: auto 0;
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0
  }
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;

  &::before, ::after {
    content: "";
    width: 250px;
    height: 125px;
    margin: 0 auto;
    border-radius: 0;
    position: absolute;
    top: 7px;
    left: 0;
    right: 0;
    transition: all 0.33s ease-out 0s
  }

  &::before {
    background: #fff;
    border: 2px solid #232323;
    left: -6px
  }

  &::after {
    border: 2px solid #c6c6c6;
    left: 6px
  }
}

.main-timeline .timeline .date-outer:before {
  left: 6px
}

.main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0
}

.main-timeline .month {
  font-size: 18px;
  font-weight: 700
}

.main-timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right;
}

.main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0
}

.main-timeline .description {
  margin-bottom: 0
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;

  &::before {
    left: 0px;
  }
}


.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right
}

@media only screen and (max-width: 991px) {
  .main-timeline .date-content {
    margin-top: 35px;

    &::before {
      width: 22.5%
    }
  }

  .main-timeline .timeline-content {
    padding: 10px 0 10px 30px
  }
  .main-timeline .title {
    font-size: 17px
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline:before {
    margin: 0;
    left: 7px
  }
  .main-timeline .timeline {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0
    }
  }
  .main-timeline .icon {
    margin: auto 0
  }
  .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0;

    &::before {
      display: none
    }
  }
  .main-timeline .date-outer {
    width: 110px;
    height: 110px;

    &:before, &:after {
      width: 250px;
      height: 110px
    }
  }
  .main-timeline .date {
    top: 30%
  }
  .main-timeline .year {
    font-size: 24px
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: center;
    padding: 10px 0
  }
  .main-timeline .title {
    margin-bottom: 10px
  }
}
</style>