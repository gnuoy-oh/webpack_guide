const { PROJECT_NAME } = require("./project.env.js");
const rm = require("rimraf"),
  path = require("path"),
  chalk = require("chalk"),
  ncp = require("ncp").ncp;

const projectName = PROJECT_NAME;
const destProjectFolderName = "./dist-" + PROJECT_NAME;
const serviceName = ["brick", "cluster" , "dashboard" , "db-browser" , "hdfs-browser" , "meta" , "kdn-m" , "kdn-v" , "kepco" , "koti_diamond-e" , "mda" , "nms-plus" , "suwon" , "vlu-bis" , "sherman"];

const assetsPath = path.resolve(__dirname, "./assets");
const destPath = path.resolve(__dirname, destProjectFolderName);

// 4. serviceName에 해당하는 명이 있을 경우, assets/images로 이동
function moveServiceImagesFolder(){
  serviceName.some((elem) => elem === projectName)
  ? ncp(
      path.join(assetsPath, "images-projects", projectName), assetsPath, (err) => {
        if (err) {
          console.log(chalk.red(err));
          throw err;
        }
        console.log(chalk.yellow("  Fifth, " + projectName + "Project images moved SUCESSFULLY\n"));

        path.join(assetsPath, "images-projects", projectName), assetsPath, (err) => {
          if (err) {
            console.log(chalk.red(err));
            throw err;
          }
          
        }
        console.log(chalk.red("  모든 이미지가 이동 되었습니다.\n"));
      }
    )
  : console.log(chalk.red("  모든 이미지가 이동 되었습니다.\n"));
    
}

// 3. default 이미지 이동
function moveImagesFolder() {
  // default iris 이미지 이동
  ncp(path.join(assetsPath, "images-projects", "_iris"), assetsPath, (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }

    console.log(chalk.white('  Third, Copy "assets/images-projects/iris/images" and Paste it into "assets/images" \n'));

    // sherman의 이미지가 다른 프로젝트에 사용되는 케이스가 보여서 해당 이미지 이동 
    ncp(
      path.join(assetsPath, "images-projects/sherman"), assetsPath, (err) => {
        if (err) {
          console.log(chalk.red(err));
          throw err;
        }
        console.log(chalk.cyan('  Fourth, Copy "assets/images-projects/sherman/images" and Paste it into "assets/images" \n'));

        moveServiceImagesFolder();
      }
    )
  });
}

// 2. assets/images 폴더 삭제
function deleteImagesFolder() {
  rm(path.join(assetsPath, "/images"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }
    console.log(chalk.cyan('  Second, Delete "assets/images folder" \n'));
    moveImagesFolder();
  });
}

// 1. dist-프로젝트 폴더 삭제
function deleteDistFolder() {
  rm(path.join(destPath, "*"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }
    console.log(chalk.gray("  apply-theme.js START\n"));
    console.log(chalk.red("  이 프로젝트 / 서비스 이름은 " + projectName + "이고, 폴더명은  " + destProjectFolderName + "입니다.\n"));
    console.log(chalk.yellow('  First, Delete "dist-' + projectName +' folder" \n'));
    deleteImagesFolder();
  });
}

function init() {
  deleteDistFolder();
}
init();
