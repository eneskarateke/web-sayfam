const data = {
  english: {
    header: {
      logoText: "E",
      navBar: {
        skills: "Skills",
        projects: "Projects",
        hire: "Hire me!",
      },
    },
    hero: {
      name: "Enes Hamza Karateke",
      text: "Creative thinker Minimalism lover",
      info: `Hi, I'm Enes. I'm a full-stack developer. If you are looking for a
    Developer who can craft solid and scalable front-end products with
    great user experiences. Let's shake hands with me.`,
      buttons: {
        hire: "Hire me",
        git: "Github",
        linkedin: "Linkedin",
      },
    },
    profile: {
      label: "Profile",
      info: {
        birthdate: {
          label: "Birth Date",
          value: "1998-07-07",
        },
        residence: {
          label: "Residence",
          value: "Antalya, Turkey",
        },
        education: {
          label: "Education",
          value: "Bachelor's in Management, Boğaziçi University",
        },
        preferredRole: {
          label: "Preferred Role",
          value: "Front-end Developer",
        },
      },
      aboutMe: {
        label: "About Me",
        pr1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla diam. Mauris accumsan ante eget ligula suscipit efficitur. ",
        pr2: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod mauris ac urna iaculis, et efficitur ligula rhoncus.",
      },
    },

    skills: {
      label: "Skills",
      skiller: {
        javascript: {
          name: "JavaScript",
          description:
            "Hi, I'm Enes. I'm a full-stack developer. If you are looking for a developer who can craft solid and scalable front-end products with great user experiences, let's shake hands with me.",
        },
        react: {
          name: "React.js",
          description:
            "Hi, I'm Enes. I'm a full-stack developer. If you are looking for a developer who can craft solid and scalable front-end products with great user experiences, let's shake hands with me.",
        },
        node: {
          name: "Node.js",
          description:
            "Hi, I'm Enes. I'm a full-stack developer. If you are looking for a developer who can craft solid and scalable front-end products with great user experiences, let's shake hands with me.",
        },
      },
    },

    projectSection: {
      label: "Projects",
      projects: {
        project1: {
          imgSrc:
            "https://res.cloudinary.com/dxrokx7ua/image/upload/v1685812738/pizza_sever_m6qjl2.jpg",
          projectName: "Pizza Order",
          description:
            "An application where you can order pizza when you feel like writing a code. You can order pizza easily by choosing the dough thickness, size and ingredients.",
          tools: ["react", "yup", "axios"],
          links: {
            labels: ["Github", "Viewsite"],
            links: [
              "https://github.com/eneskarateke/fsweb-s7-challenge-pizza",
              "https://pizza-sever.netlify.app/",
            ],
          },
        },
        project2: {
          imgSrc:
            "https://res.cloudinary.com/dxrokx7ua/image/upload/v1685812935/nasa_gs1xsp.jpg",
          projectName: "NASA APOD",
          description:
            "An application that is updated daily with photos from NASA and allows you to go to any date and browse the NASA photo from that date.",
          tools: ["react", "bootstrap", "axios"],
          links: {
            labels: ["Github", "Viewsite"],
            links: [
              "https://github.com/eneskarateke/FSWeb-S6G3-Nasa",
              "https://nasa-apod07.netlify.app/",
            ],
          },
        },
        project3: {
          imgSrc:
            "https://res.cloudinary.com/dxrokx7ua/image/upload/v1686152482/taskmanagement_qhgthd.jpg",
          projectName: "Task Manager",
          description:
            "An application that lets you make your own to-do list, you can set a deadline for your tasks, if in need also this app lets you the set responsible people for the task.",
          tools: ["react", "react-hook-form", "toastify"],
          links: {
            labels: ["Github", "Viewsite"],
            links: [
              "https://github.com/eneskarateke/fsweb-s9g2-task-yonetimi-2",
              "https://task-management07.netlify.app/",
            ],
          },
        },
      },
    },

    footer: {
      text: "Let’s work together on your next product.",

      links: {
        email: "eneskarateke@gmail.com",
        blog: "Personal Blog",
        git: "Github",
        linkedin: "Linkedin",
      },
    },
  },
  turkish: {
    header: {
      logoText: "E",
      navBar: {
        skills: "Yetenekler",
        projects: "Projeler",
        hire: "İşe al!",
      },
    },
    hero: {
      name: "Enes Hamza Karateke",
      text: "Minimalist takılan yaratıcı düşünür",
      info: `Merhaba, ben Enes. Ben bir full-stack geliştiricisiyim. Eğer sağlam ve ölçeklenebilir front-end ürünler üretebilen geliştirici
    arıyorsan benimle el sıkışabilirsin.`,
      buttons: {
        hire: "İşe al!",
        git: "Github",
        linkedin: "Linkedin",
      },
    },
    profile: {
      label: "Profil",
      info: {
        birthdate: {
          label: "Doğum Tarihi",
          value: "1998-07-07",
        },
        residence: {
          label: "İkamet Şehri",
          value: "Antalya, Turkey",
        },
        education: {
          label: "Eğitim Durumu",
          value: "İşletme Lisans, Boğaziçi Üniversitesi",
        },
        preferredRole: {
          label: "Tercih Edilen Rol",
          value: "Front-end Developer",
        },
      },
      aboutMe: {
        label: "Hakkımda",
        pr1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nulla diam. Mauris accumsan ante eget ligula suscipit efficitur. ",
        pr2: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod mauris ac urna iaculis, et efficitur ligula rhoncus.",
      },
    },

    skills: {
      label: "Yetenekler",
      skiller: {
        javascript: {
          name: "JavaScript",
          description: `Merhaba, ben Enes. Ben bir full-stack geliştiricisiyim. Eğer sağlam ve ölçeklenebilir front-end ürünler üretebilen geliştirici
        arıyorsan benimle el sıkışabilirsin.`,
        },
        react: {
          name: "React.js",
          description: `Merhaba, ben Enes. Ben bir full-stack geliştiricisiyim. Eğer sağlam ve ölçeklenebilir front-end ürünler üretebilen geliştirici
        arıyorsan benimle el sıkışabilirsin.`,
        },
        node: {
          name: "Node.js",
          description: `Merhaba, ben Enes. Ben bir full-stack geliştiricisiyim. Eğer sağlam ve ölçeklenebilir front-end ürünler üretebilen geliştirici
        arıyorsan benimle el sıkışabilirsin.`,
        },
      },
    },

    projectSection: {
      label: "Projeler",
      projects: {
        project1: {
          imgSrc:
            "https://res.cloudinary.com/dxrokx7ua/image/upload/v1685812738/pizza_sever_m6qjl2.jpg",
          projectName: "Pizza Sipariş",
          description:
            "Kod yazarken canınız pizza çektiğinde pizza siparişi verebileciğiniz bir uygulama. Hamur kalınlığını, boyutunu ve malzemeleri seçerek kolay bir şekilde pizza siparişi verebilirsiniz.",
          tools: ["react", "yup", "axios"],
          links: {
            labels: ["Github", "Siteye git"],
            links: [
              "https://github.com/eneskarateke/fsweb-s7-challenge-pizza",
              "https://pizza-sever.netlify.app/",
            ],
          },
        },
        project2: {
          imgSrc:
            "https://res.cloudinary.com/dxrokx7ua/image/upload/v1685812935/nasa_gs1xsp.jpg",
          projectName: "NASA APOD",
          description:
            "Her gün Nasa'dan gelen fotoğraflarla güncellenen ve dilediğiniz tarihe giderek o tarihteki NASA fotorğafına  göz atmanızı sağlayan bir uygulama.",
          tools: ["react", "bootstrap", "axios"],
          links: {
            labels: ["Github", "Siteye git"],
            links: [
              "https://github.com/eneskarateke/FSWeb-S6G3-Nasa",
              "https://nasa-apod07.netlify.app/",
            ],
          },
        },
        project3: {
          imgSrc:
            "https://res.cloudinary.com/dxrokx7ua/image/upload/v1686152482/taskmanagement_qhgthd.jpg",
          projectName: "Görev Yönetimi",
          description:
            "Kendi yapılacaklar listenizi yapmanızı sağlayan bir uygulama, görevleriniz için bir son tarih belirleyebilir, ihtiyaç duyarsanız bu uygulama aynı zamanda görev için sorumlu kişileri belirlemenizi sağlar.",
          tools: ["react", "react-hook-form", "toastify"],
          links: {
            labels: ["Github", "Viewsite"],
            links: [
              "https://github.com/eneskarateke/fsweb-s9g2-task-yonetimi-2",
              "https://task-management07.netlify.app/",
            ],
          },
        },
      },
    },

    footer: {
      text: "Yeni ürününüzde beraber çalışalım.",

      links: {
        email: "eneskarateke@gmail.com",
        blog: "Kişisel Blog",
        git: "Github",
        linkedin: "Linkedin",
      },
    },
  },
};

export default data;
