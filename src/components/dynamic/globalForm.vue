<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import JsonEditorVue from 'json-editor-vue';
import { Mode } from 'vanilla-jsoneditor';
import 'vanilla-jsoneditor/themes/jse-theme-dark.css';
import Editor from '@tinymce/tinymce-vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const onSubmit = () => {
  console.log('submit', JSON.stringify(props.data));
}
</script>

<template>
  <form class="p-5 bg-card w-full space-y-6 rounded-md border border-input">
    <FormField name="username">
      <FormItem v-for="(value, key) in data" :key="key">
        <FormLabel>{{ key }}</FormLabel>
        <FormControl>
          <Input v-if="typeof value === 'string' && key !== 'longDescription'" type="text" v-model="data[key]" />
          <Input v-if="typeof value === 'number'" type="number" v-model="data[key]" />
          <Input v-if="typeof value === 'boolean'" class="w-min h-[20px]" type="checkbox" :checked="data[key]" @input="data[key] = $event.target.checked" />
          <JsonEditorVue v-if="typeof value === 'object'" v-model="data[key]" :mode="Mode.text" class="jse-theme-dark" />
<!--          <editor-content class="" v-if="typeof value === 'string' && key === 'longDescription'" :editor="editors[key]" />-->
          <editor
              v-if="typeof value === 'string' && key === 'longDescription'"
              :name="key"
              v-model="data[key]"
              :init="{
                            entity_encoding: 'raw',
                            content_css: false,
                            skin: false,
                            convert_urls: false,
                            file_picker_types: 'image',
                            image_title: true,
                            valid_elements: '*[*]',
                        }"
              plugins="preview importcss searchreplace autolink autosave save code directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars"
              menubar="file edit view insert format tools table tc help"
              toolbar="undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent | code | numlist bullist | forecolor backcolor casechange removeformat | pagebreak | charmap | fullscreen preview save print | image media template link anchor codesample | ltr rtl"
          />

        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="button" @click="onSubmit()">
      Créer
    </Button>
  </form>
</template>

<style scoped>
</style>
