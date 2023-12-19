<template>
    <div class="flex flex-col justify-center lg:mx-[273px] lg:my-[87px] md:mx-[100px] sm:mx-[50px] md:my-[57px] sm:my-[27px]">
        <div id="content" class=" text-sm text-[#a3a3a3] font-Rubik-normal">
            <p class="box-border mb-4">The Purpose of the Master Plan is to establish a framework to guide the physical development of UNHAS-FE Gowa campus including the future extension. The quality of education provided in a university campus is in large part affected by the quality of the facilities where pedagogical activities are conducted.
            </p>
            <p class="box-border mb-4">The campus master plan will ensure that the design and future development will be in compliance with UNHAS’s academic strategic plan.</p>
        </div>
        <div>
            <canvas ref="pdfCanvas"></canvas>
        </div>
    </div>
</template>

<script>
import pdfjsLib from 'pdfjs-dist';

export default {
  data() {
    return {
      pdfPath: '@/assets/dokumen/master-plan.pdf"',
      pageNum: 1,
      pdf: null,
    };
  },
  mounted() {
    this.renderPdf();
  },
  methods: {
    async renderPdf() {
      // Load PDF document
      const loadingTask = pdfjsLib.getDocument(this.pdfPath);
      this.pdf = await loadingTask.promise;

      // Render the initial page
      this.renderPage(this.pageNum);
    },
    renderPage(pageNumber) {
      this.pdf.getPage(pageNumber).then((page) => {
        const canvas = this.$refs.pdfCanvas;
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext);
      });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>