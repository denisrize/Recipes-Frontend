<template>
  <div class="about-page d-flex align-items-center justify-content-center">
      <b-container>
        <!-- About us title -->
        <h1 class="text-center mt-4">About Us</h1>
  
        <!-- About us paragraph -->
        <p class="text-center">Welcome to our culinary corner of the web, a unique recipe platform that brings the world's flavors to your kitchen! 🥳 Our website is not just a collection of recipes, it's a vibrant community of food lovers and home cooks. Here, you can explore a vast array of dishes from various cuisines around the globe, each one offering a unique taste and experience.
            <br>
            <br>

            But that's not all! We believe that everyone has a chef inside them, waiting to be discovered. That's why we offer you the opportunity to create your own recipes and save them in your personal profile. You can also create a list of your favorite recipes from our site, making it easier to return to those beloved dishes time and time again.
            <br>
            <br>
            In addition, we're proud to share with you a special collection of our families' recipes. These are the dishes that have graced our tables for generations from our beloved <b>Babushkot</b> , and now we're passing them on to you. 🥙
            <br>
            <br>
            We also understand the value of diversity and learning from others. That's why we've included references and links to some of the best food bloggers out there. These culinary creatives offer a wealth of knowledge and inspiration, and we're thrilled to direct you to their work.
            <br>
            <br>
            So, whether you're a seasoned home cook or just starting your culinary journey, our website is a place for you to explore, create, and most importantly, enjoy good food. <b> Welcome to our kitchen! </b>👨‍🍳</p>
            
        <!-- LinkedIn profiles -->
        <div class="linkedin-profiles">
          <h2 class="text-center">Our Team</h2>
  
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="4" class="profile" v-for="(profile, index) in profiles" :key="index">
              <!-- LinkedIn profile link -->
              <a :href="profile.link" target="_blank" rel="noopener noreferrer" class="profile-link">
                <!-- LinkedIn profile picture -->
                <img :src="profile.image" :alt="profile.name + ' LinkedIn Profile Picture'" class="rounded-circle profile-img mb-2">
                <!-- LinkedIn profile name -->
                <div class="d-flex align-items-center">
                <img class="icon mr-2" src="@/assets/icons/linkedin.png" alt="LinkedIn Icon">
                <div>{{ profile.name }}</div>
                </div>
              </a>
            </b-col>
          </b-row>
        </div>

        <h2 class="mt-5 text-center">Previous Work</h2>
        <b-row >
            <b-col md="2"></b-col>
            <b-col md="5">
            <h4 class="mt-2 mb-2">Assignment 1</h4>
            <div v-for="(work, index) in previousWorks.slice(0, previousWorks.length / 2 + 1)" :key="index">
                <a :href="work.link" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center text-dark mb-2">
                <img src="@/assets/icons/github.png" alt="GitHub icon" class="icon mr-2">
                {{ work.name }}
                </a>
            </div>
            </b-col>
            <b-col md="5">
            <h4 class="mt-2 mb-2">Assignment 2</h4>
            <div v-for="(work, index) in previousWorks.slice(previousWorks.length  / 2 + 1)" :key="index">
                <a :href="work.link" target="_blank" rel="noopener noreferrer" class="d-flex align-items-center text-dark mb-2">
                <img src="@/assets/icons/github.png" alt="GitHub icon" class="icon mr-2">
                {{ work.name }}
                </a>
            </div>
            </b-col>
        </b-row>

      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profiles: [
          {
            name: 'Denis Rize',
            link: 'https://www.linkedin.com/in/denis-rize',
            image: 'https://media.licdn.com/dms/image/C4E03AQGbBRNtd1bSXA/profile-displayphoto-shrink_800_800/0/1661453660625?e=1692230400&v=beta&t=wx0NIB7Z5hm1Jcu8Z95BIs30J2brBjM5dlhwdtbtYJs'
          },
          {
            name: 'Lior Tkach',
            link: 'https://www.linkedin.com/in/lior-tkach',
            image: 'https://media.licdn.com/dms/image/C4E03AQGeprYAOE-XCw/profile-displayphoto-shrink_800_800/0/1604502622277?e=1692230400&v=beta&t=cr1zgL1KLzVGBjXwl1_kElOgOjPWnUu1-VCJEHYNmrY'
          }],
          previousWorks: [
            { name: 'Svika Pick', link: 'https://liortkach.github.io' },
            { name: 'My grandmother', link: 'https://web-development-environments-2023.github.io/316476431' },
            { name: 'Tupac Vs Biggie', link: 'https://github.com/Web-Development-Environments-2023/assignment2-208892166_316476431' },

            ]
        
      };
    }
  };
  </script>
  
<style scoped>
.profile-link {
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
color: inherit;
transition: transform 0.3s ease;
}
p {
  font-size: 150%;
}
.profile-link:hover {
transform: scale(1.1);
}
.profile-img {
width: 100px;
height: 100px;
}
</style>
  