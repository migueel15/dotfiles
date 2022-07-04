MESSAGE="Update Dotfiles - $(date)"
GIT="`which git` --git-dir=/home/firez/.dotfiles/ --work-tree=/home/firez"
cd ${REPO_DIR}
${GIT} add -u 
${GIT} commit -m "${MESSAGE}"
${GIT} push
echo ${MESSAGE} >> /home/firez/Scripts/Logger.txt
