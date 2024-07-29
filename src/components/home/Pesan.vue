<template>
    <section class="pesan text-center px-10" >
        <h1 class="text-neutral-content text-3xl sm:text-5xl font-bold mb-2" id="kotak-saran">Kotak Pesan</h1>
        <form action="/kirimsaran" method="post">
            <input type="text" name="nama" placeholder="Ketik nama anda" class="input input-bordered w-full max-w-4xl my-3" required/><br>

            <textarea name="saran" class="textarea textarea-bordered my-3 w-full max-w-4xl" placeholder="Ketik pesan anda" required></textarea><br>

            <!-- <button class="btn text-neutral-content my-3 w-full max-w-xs" type="submit">Kirim</button> -->
            <label for="my-modal-6" class="btn modal-button text-neutral-content my-3 w-full max-w-xs">Kirim</label>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box text-start">
                <h3 class="font-bold text-lg">Kirim?</h3>
                <p class="py-4">Yakin untuk mengirimkan pesan anda?</p>
                <div class="modal-action">
                <label for="my-modal-6" class="btn">Batal</label>
                <button type="submit" class="btn">Kirim</button>
                </div>
            </div>
            </div>
        </form>
    </section>
</template>