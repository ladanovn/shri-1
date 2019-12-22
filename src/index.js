import "./style/index.scss";

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        for (const item of e.path) {
            if (item.classList) {
                if (item.classList.contains('history__transaction')) {
                    if (item.classList.contains('history__transaction_opened')) {
                        item.classList.remove('history__transaction_opened');
                    } else {
                        item.classList.add('history__transaction_opened');
                    }
                    break;
                }
            }
        }

        if (e.target.classList.contains('onoffswitch__button')) {
            const switcher = document.getElementsByClassName('onoffswitch')[0];
            const page = document.getElementsByClassName('page')[0];

            if (switcher.classList.contains("onoffswitch_checked")) {
                switcher.classList.remove("onoffswitch_checked");
            } else {
                switcher.classList.add("onoffswitch_checked");
            }

            if (page.classList.contains("theme_color_project-default")) {
                page.classList.remove("theme_color_project-default");
                page.classList.add("theme_color_project-inverse");
            } else {
                page.classList.remove("theme_color_project-inverse");
                page.classList.add("theme_color_project-default");
            }
        }
    });
});
