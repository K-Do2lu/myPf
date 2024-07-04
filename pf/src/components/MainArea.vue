<template>
  <div>
    <div class="mainContent">
      <video src="../assets/img/mainHandsLove.mp4" autoplay muted loop></video>

      <div class="mainUserBx">
        <div class="mainUser"></div>

        <div class="mainUserTxtBx">
          <span class="userName">do2lu</span>
          <span class="userEmail">kdy992da@naver.com</span>

          <div class="mainUserInfos">
            <div class="mainUserProfile" @click="openPopup('aboutMe')">
              Profile
            </div>
            <div class="mainUserCareer" @click="openPopup('career')">
              Career
            </div>
            <div class="mainUserContact" @click="toggleContactArea">Call</div>
          </div>
        </div>
      </div>

      <div class="mainBtnBx">
        <div class="mainBtns">
          <div
            class="mainBtn"
            @click="toggleBComponent(null)"
            :class="{ isActive: selectedId === null && selectedBtn }"
          >
            All
          </div>
          <div
            class="mainBtn"
            @click="toggleBComponent(1)"
            :class="{ isActive: selectedId === 1 && selectedBtn }"
          >
            UI/UX
          </div>
          <div
            class="mainBtn"
            @click="toggleBComponent(2)"
            :class="{ isActive: selectedId === 2 && selectedBtn }"
          >
            Project
          </div>
          <div
            class="mainBtn"
            @click="toggleBComponent(3)"
            :class="{ isActive: selectedId === 3 && selectedBtn }"
          >
            Etc
          </div>
          <button class="btn-secondary like-review" @click="likeBtn">
            <i class="fa fa-heart" aria-hidden="true" ref="myButton"></i
            >{{ likeNum }}
          </button>
        </div>
      </div>
    </div>

    <WorkArea v-if="work" ref="workArea" :id="selectedId"></WorkArea>
    <ContactArea
      v-if="contact"
      ref="contactArea"
      class="contact-area"
    ></ContactArea>
  </div>
</template>

<script>
import WorkArea from "../components/WorkArea.vue";
import ContactArea from "../components/ContactArea.vue";
import pdfUrl from "../assets/img/aboutMe2.pdf";
import pdfUrl2 from "../assets/img/career2.pdf";

export default {
  name: "MainArea",
  components: {
    WorkArea,
    ContactArea,
  },
  data() {
    return {
      likeNum: 0,
      isActive: false,
      work: false,
      contact: false,
      selectedId: undefined,
      selectedBtn: false,
      pdfUrls: {
        aboutMe: pdfUrl,
        career: pdfUrl2,
      },
    };
  },
  created() {
    const savedLikeNum = localStorage.getItem("likeNum");
    if (savedLikeNum) {
      this.likeNum = parseInt(savedLikeNum, 10);
    }
  },
  methods: {
    toggleBComponent(id) {
      this.work = true;
      this.selectedId = id;
      this.selectedBtn = true;

      this.$nextTick(() => {
        if (this.work) {
          this.scrollToWorkArea();
        }
      });
    },
    scrollToWorkArea() {
      const workArea = this.$refs.workArea;
      if (workArea) {
        workArea.$el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    toggleContactArea() {
      this.contact = !this.contact;
      this.$nextTick(() => {
        if (this.contact) {
          this.scrollToContactArea();
        }
      });
    },
    scrollToContactArea() {
      const contactArea = this.$refs.contactArea;
      if (contactArea) {
        contactArea.$el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    likeBtn() {
      this.likeNum++;
      this.isActive = true;

      setTimeout(() => {
        this.isActive = false;
        const buttonEl = this.$refs.myButton;
        buttonEl.classList.remove("animateLike");
      }, 500);

      const buttonEl = this.$refs.myButton;
      buttonEl.classList.add("animateLike");

      localStorage.setItem("likeNum", this.likeNum.toString());

      if (this.likeNum % 10 === 0) {
        alert("5252~적당히 좋아하라구😏");
      }
    },
    openPopup(key) {
      const pdfUrl = this.pdfUrls[key];
      if (pdfUrl) {
        window.open(
          pdfUrl,
          "_blank",
          "toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=600,height=800"
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/MainArea.scss";
</style>
