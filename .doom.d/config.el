(setq user-full-name "Miguel Dorado"
      user-mail-address "miguelangeldorado10@gmail.com")

(setq doom-theme 'doom-one)

(use-package! org-auto-tangle
  :defer t
  :hook (org-mode . org-auto-tangle-mode)
  :config
  (setq org-auto-tangle-default t))

(setq display-line-numbers-type t)

(setq org-directory "~/org/")
dadw
