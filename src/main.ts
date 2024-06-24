import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router.ts";

import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver/theme.js';
import 'tinymce/icons/default/icons.js';

import 'tinymce/models/dom/model';

import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/content/default/content.css';
import uiOxideContent from 'tinymce/skins/ui/oxide/content.css?inline';

import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

export async function loadTinyMCE() {
    tinymce._setBaseUrl(import.meta.env.BASE_URL);
    await tinymce.init({
        content_css: false,
        skin: false,
        content_style: uiOxideContent.toString(),
        automatic_uploads: true,
        file_picker_types: 'image',
        image_title: true,
    });
}

(async () => {
    await loadTinyMCE();
    createApp(App).use(router).mount('#app')
})();
