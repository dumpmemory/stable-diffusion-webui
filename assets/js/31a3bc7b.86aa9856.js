"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(k,l(l({ref:t},p),{},{components:n})):o.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={title:"Running Stable Diffusion WebUI Using Docker"},l=void 0,r={unversionedId:"Installation/docker-guide",id:"Installation/docker-guide",title:"Running Stable Diffusion WebUI Using Docker",description:"\x3c!--",source:"@site/docs/1.Installation/4.docker-guide.md",sourceDirName:"1.Installation",slug:"/Installation/docker-guide",permalink:"/sygil-webui/docs/Installation/docker-guide",draft:!1,editUrl:"https://github.com/Sygil-Dev/sygil-webui/tree/main/docs/1.Installation/4.docker-guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Running Stable Diffusion WebUI Using Docker"},sidebar:"tutorialSidebar",previous:{title:"Manual Linux Installation",permalink:"/sygil-webui/docs/Installation/linux-installation"},next:{title:"Streamlit Web UI Interface",permalink:"/sygil-webui/docs/Streamlit/streamlit-interface"}},s={},u=[{value:"Running prebuilt image",id:"running-prebuilt-image",level:2},{value:"Building the image",id:"building-the-image",level:2},{value:"But what about AMD?",id:"but-what-about-amd",level:3},{value:"First-Time Startup Instructions",id:"first-time-startup-instructions",level:2},{value:"Clone Repository",id:"clone-repository",level:3},{value:"Create a Container Instance Using Docker Compose",id:"create-a-container-instance-using-docker-compose",level:3},{value:"Accessing your Stable Diffusion WebUI Instance",id:"accessing-your-stable-diffusion-webui-instance",level:3},{value:"Where is ___ stored?",id:"where-is-___-stored",level:3},{value:"Shutting down your Docker container",id:"shutting-down-your-docker-container",level:3},{value:"Resetting your Docker environment",id:"resetting-your-docker-environment",level:2},{value:"Misc Related How-to",id:"misc-related-how-to",level:2},{value:"Dockerfile Implementation Notes",id:"dockerfile-implementation-notes",level:2},{value:"Other Notes",id:"other-notes",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"running-prebuilt-image"},"Running prebuilt image"),(0,i.kt)("p",null,"The easiest way to run Stable Diffusion WebUI is to use the prebuilt image from Docker Hub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull hlky/sd-webui:runpod\n")),(0,i.kt)("p",null,"This image has all the necessary models baked in. It is quite large but streamlines the process of managing the various models and simplifies the user experience."),(0,i.kt)("p",null,"Alternatively you can pull:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull hlky/sd-webui:latest\n")),(0,i.kt)("p",null,"This image includes the babrebones environment to run the Web UI. The models will be downloaded during the installation process. You will have to take care of the volume for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sd/models")," directory."),(0,i.kt)("p",null,"It is recommended that you run the ",(0,i.kt)("inlineCode",{parentName:"p"},"runpod")," version.\nYou can run the image using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker container run --rm -d -p 8501:8501 -e STREAMLIT_SERVER_HEADLESS=true -e "WEBUI_SCRIPT=webui_streamlit.py" -e "VALIDATE_MODELS=false" -v "${PWD}/outputs:/sd/outputs" --gpus all hlky/sd-webui:runpod\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: if you are running it on runpod it only supports one volume mount which is used for your outputs.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: if you are running it on your local machine the output directory will be created in the current directory from where you run this command.")),(0,i.kt)("h2",{id:"building-the-image"},"Building the image"),(0,i.kt)("p",null,"This Docker environment is intended to speed up development and testing of Stable Diffusion WebUI features. Use of a container image format allows for packaging and isolation of Stable Diffusion / WebUI's dependencies separate from the Host environment."),(0,i.kt)("p",null,"You can use this Dockerfile to build a Docker image and run Stable Diffusion WebUI locally."),(0,i.kt)("p",null,"Requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host computer is AMD64 architecture (e.g. Intel/AMD x86 64-bit CPUs)"),(0,i.kt)("li",{parentName:"ul"},"Host computer operating system (Linux or Windows with WSL2 enabled)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ","[Microsoft WSL2 Installation Guide for Windows 10]"," (",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/"},"https://learn.microsoft.com/en-us/windows/wsl/"),") for more information on installing."),(0,i.kt)("li",{parentName:"ul"},"Ubuntu (Default) for WSL2 is recommended for Windows users"))),(0,i.kt)("li",{parentName:"ul"},"Host computer has Docker, or compatible container runtime",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Docker Compose (v1.29+) or later"),(0,i.kt)("li",{parentName:"ul"},"See ","[Install Docker Engine]"," (",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/#supported-platforms"},"https://docs.docker.com/engine/install/#supported-platforms"),") to learn more about installing Docker on your Linux operating system"))),(0,i.kt)("li",{parentName:"ul"},"10+ GB Free Disk Space (used by Docker base image, the Stable Diffusion WebUI Docker image for dependencies, model files/weights)")),(0,i.kt)("p",null,"Additional Requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host computer is equipped with a CUDA-compatible GPU (e.g. Nvidia RTX 2xxx, 3000x)"),(0,i.kt)("li",{parentName:"ul"},"NVIDIA Container Toolkit is installed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ","[NVIDIA Container Toolkit Installation Guide]"," (",(0,i.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#supported-platforms"},"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#supported-platforms"),' "Official NVIDIA Installation Guide") for more information on installing.')))),(0,i.kt)("p",null,"Other Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Optional" packages commonly used with Stable Diffusion WebUI workflows such as, RealESRGAN, GFPGAN, will be installed by default.'),(0,i.kt)("li",{parentName:"ul"},"An older version of running Stable Diffusion WebUI using Docker exists here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sygil-Dev/sygil-webui/discussions/922"},"https://github.com/Sygil-Dev/sygil-webui/discussions/922"))),(0,i.kt)("h3",{id:"but-what-about-amd"},"But what about AMD?"),(0,i.kt)("p",null,"There is tentative support for AMD GPUs through docker which can be enabled via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.amd.yml"),",\nalthough this is still in the early stages. Right now, this ",(0,i.kt)("em",{parentName:"p"},"only")," works on native linux (not WSL2) due\nto issues with AMDs support of GPU passthrough. You also ",(0,i.kt)("em",{parentName:"p"},"must")," have ROCm drivers installed on the host."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    docker compose -f docker-compose.yml -f docker-compose.amd.yml ...\n")),(0,i.kt)("p",null,"or, by setting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    export COMPOSE_FILE=docker-compose.yml:docker-compose.amd.yml\n")),(0,i.kt)("p",null,"in your ",(0,i.kt)("inlineCode",{parentName:"p"},".profile")," or through a tool like ",(0,i.kt)("inlineCode",{parentName:"p"},"direnv")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"first-time-startup-instructions"},"First-Time Startup Instructions"),(0,i.kt)("h3",{id:"clone-repository"},"Clone Repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone this repository to your host machine:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/Sygil-Dev/sygil-webui.git")))),(0,i.kt)("li",{parentName:"ul"},"If you plan to use Docker Compose to run the image in a container (most users), create an ",(0,i.kt)("inlineCode",{parentName:"li"},".env_docker")," file using the example file:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"* `cp .env_docker.example .env_docker`\n* Edit `.env_docker` using the text editor of your choice.\n* Ensure `VALIDATE_MODELS` is set to `true`\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Options available in ",(0,i.kt)("inlineCode",{parentName:"p"},".env_docker")," allow you to control automatic model file checking/download during startup, and to select the Stable Diffusion WebUI implementation to run (Gradio vs Streamlit). You may the set ",(0,i.kt)("inlineCode",{parentName:"p"},"VALIDATE_MODELS")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," after the initial run (once models are downloaded) to speed up startup time.")))),(0,i.kt)("h3",{id:"create-a-container-instance-using-docker-compose"},"Create a Container Instance Using Docker Compose"),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file  will create a Docker container instance named ",(0,i.kt)("inlineCode",{parentName:"p"},"sd-webui")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create an instance of the Stable Diffusion WebUI image as a Docker container:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker compose up")))),(0,i.kt)("li",{parentName:"ul"},"During the first run, the container image will be build containing all of the dependencies necessary to run Stable Diffusion. This build process will take several minutes to complete",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"After the image build has completed, you will have a docker image for running the Stable Diffusion WebUI tagged ",(0,i.kt)("inlineCode",{parentName:"li"},"sygil-webui:dev"))))),(0,i.kt)("p",null,"(Optional) Daemon mode:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'You can start the container in "daemon" mode by applying the ',(0,i.kt)("inlineCode",{parentName:"li"},"-d")," option:  ",(0,i.kt)("inlineCode",{parentName:"li"},"docker compose up -d"),". This will run the server in the background so you can close your console window without losing your work."),(0,i.kt)("li",{parentName:"ul"},"When running in daemon mode, you can view logging output from your container by running ",(0,i.kt)("inlineCode",{parentName:"li"},"docker logs sd-webui"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Depending on your version of Docker/Docker Compose installed, the command may be ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," (older versions) or ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose")," (newer versions)")),(0,i.kt)("h3",{id:"accessing-your-stable-diffusion-webui-instance"},"Accessing your Stable Diffusion WebUI Instance"),(0,i.kt)("p",null,"The container may take several minutes to start up if model weights/checkpoints need to be downloaded. You can view progress via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose ps")," to see the current status or by checking the logs using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose logs"),"."),(0,i.kt)("p",null,"Depending on the WebUI implementation you selected in ",(0,i.kt)("inlineCode",{parentName:"p"},".env_docker"),", you can access the WebUI at the following URLs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gradio:  http://localhost:7860"),(0,i.kt)("li",{parentName:"ul"},"Streamlit:  http://localhost:8501")),(0,i.kt)("p",null,"You can expose and access your WebUI to/from remote hosts by the machine's IP address:\n(note: This generally does not apply to Windows/WSL2 users due to WSL's implementation)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gradio:  http://\\<host-ip-address",">",":7860"),(0,i.kt)("li",{parentName:"ul"},"Streamlit:  http://\\<host-ip-address",">",":8501")),(0,i.kt)("h3",{id:"where-is-___-stored"},"Where is ___ stored?"),(0,i.kt)("p",null,"By default, model weights/checkpoint files will be stored at the following path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./model_cache/"))),(0,i.kt)("p",null,"Output files generated by Stable Diffusion will be stored at the following path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./output/"))),(0,i.kt)("p",null,"The above paths will be accessible directly from your Docker container's host."),(0,i.kt)("h3",{id:"shutting-down-your-docker-container"},"Shutting down your Docker container"),(0,i.kt)("p",null,"You can stop your Docker container by pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL+C")," key combination in the terminal where the container was started.."),(0,i.kt)("p",null,"If you started the container using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose"),", you can stop the container with the command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker compose down"))),(0,i.kt)("p",null,"Using the default configuration, your Stable Diffusion output, cached model weights/files, etc will persist between Docker container starts."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"resetting-your-docker-environment"},"Resetting your Docker environment"),(0,i.kt)("p",null,"Should you need to do so, the included ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-reset.sh")," script will remove all docker images, stopped containers, and cached model weights/checkpoints."),(0,i.kt)("p",null,"You will need to re-download all associated model files/weights used by Stable Diffusion WebUI, which total to several gigabytes of data. This will occur automatically upon the next startup."),(0,i.kt)("h2",{id:"misc-related-how-to"},"Misc Related How-to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can obtain shell access to a running Stable Diffusion WebUI container started with Docker Compose with either of the following commands:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker exec -it st-webui /bin/bash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker compose exec stable-diffusion bash")))),(0,i.kt)("li",{parentName:"ul"},"To start a container using the Stable Diffusion WebUI Docker image without Docker Compose, you can do so with the following command:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker run --rm -it --entrypoint /bin/bash sygil-webui:dev")))),(0,i.kt)("li",{parentName:"ul"},"To start a container, with mapped ports, GPU resource access, and a local directory bound as a container volume, you can do so with the following command:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docker run --rm -it -p 8501:8501 -p 7860:7860 --gpus all -v $(pwd):/sd --entrypoint /bin/bash sygil-webui:dev"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"dockerfile-implementation-notes"},"Dockerfile Implementation Notes"),(0,i.kt)("p",null,"Compared to base Stable Diffusion distribution, Conda-based package management was removed."),(0,i.kt)("p",null,"The Pytorch base image with Nvidia CUDA support is used as the base Docker image to simplify dependencies."),(0,i.kt)("p",null,"Python dependency requirements for various packages used by Stable Diffusion WebUI have been separated into different groups. During the container image build process, requirements are installed in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stable Diffusion (core) requirements (",(0,i.kt)("inlineCode",{parentName:"li"},"sd_requirements.txt"),")"),(0,i.kt)("li",{parentName:"ol"},"General Requirements (",(0,i.kt)("inlineCode",{parentName:"li"},"requirements.txt"),")"),(0,i.kt)("li",{parentName:"ol"},"External optional packages requirements (",(0,i.kt)("inlineCode",{parentName:"li"},"ext_requirements.txt"),")"),(0,i.kt)("li",{parentName:"ol"},"WebUI requirements (",(0,i.kt)("inlineCode",{parentName:"li"},"ui_requirements.txt"),")")),(0,i.kt)("p",null,"Python package dependencies have been version-pinned where possible."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Developers:  When developing new features or making changes to the environment that require dependency changes, please update and make notes in the appropriate file to help us better track and manage dependencies.")),(0,i.kt)("h3",{id:"other-notes"},"Other Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"root_profile")," Docker Volume",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"huggingface/transformers")," package will download files to a cache located at ",(0,i.kt)("inlineCode",{parentName:"li"},"/root/.cache/huggingface/transformers")," totalling nearly ~1.6 GB")))))}c.isMDXComponent=!0}}]);