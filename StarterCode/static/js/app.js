// use d3 to read json
// data imported as bbdata
d3.json("../samples.json").then((bbdata)) => {
// console log
    console.log(bbdata)
    var otu_ids = sampledata.samples[0].otu_ids;
    console.log(otu_ids)
    var sample_values = sampledata.samples[0].sample_values.slice(0,10).reverse();
    console.log(sample_values)
    var labels = sampledata.samples[0].otu_labels.slice(0,10);
    console.log(labels)
    // top 10 OTU's
    var top_10_otu = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
    // make id's strings
    var otu_id = top_10_otu.map(d => "OTU " + d);